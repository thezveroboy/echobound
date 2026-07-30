import { CLOTHING_CATALOG, getClothingItem } from '../character/heroine.js';

const COLORS = {
  red: 0xcc3333, orange: 0xdd7733, yellow: 0xddbb33, green: 0x44aa44,
  teal: 0x339999, blue: 0x3366cc, purple: 0x8844aa, pink: 0xdd6699,
  white: 0xeeeeee, black: 0x333333, gray: 0x999999,
};
const CSS_COLORS = {
  red: '#cc3333', orange: '#dd7733', yellow: '#ddbb33', green: '#44aa44',
  teal: '#339999', blue: '#3366cc', purple: '#8844aa', pink: '#dd6699',
  white: '#eeeeee', black: '#333333', gray: '#999999',
};

export class UIManager {
  constructor() {
    this.hpBar = document.getElementById('hp-bar');
    this.hpText = document.getElementById('hp-text');
    this.staminaBar = document.getElementById('stamina-bar');
    this.staminaText = document.getElementById('stamina-text');
    this.weaponHud = document.getElementById('weapon-hud');
    this.damageNumbers = document.getElementById('damage-numbers');
    this.bossHp = document.getElementById('boss-hp');
    this.bossBar = document.getElementById('boss-bar');
    this.interactHint = document.getElementById('interact-hint');
    this.inventoryPanel = document.getElementById('inventory-panel');
    this.loadBar = document.getElementById('load-bar');
    this.loading = document.getElementById('loading');
    this.coinText = document.getElementById('coin-text');
    this.invGrid = document.getElementById('inv-grid');
    this.dragGhost = document.getElementById('drag-ghost');

    this.weaponSlots = [];
    this.activeWeaponIndex = 0;

    // Inventory (20 slots, items or null)
    this._inventory = new Array(20).fill(null);
    this._draggedSlot = -1;
    this._draggedEquip = null;

    // Equipment state: slot → clothing item id or null
    this._equipped = { headwear: null, dress: null, legwear: null, armwear: null };
    // Callback on equip/unequip
    this._onEquip = null;

    this._bindDragDrop();
    this._renderGrid();
    this._renderEquip();

    const sortBtn = document.getElementById('inv-sort-btn');
    const dropBtn = document.getElementById('inv-drop-btn');
    if (sortBtn) sortBtn.addEventListener('click', () => { this.sort(); this._renderGrid(); });
    if (dropBtn) dropBtn.addEventListener('click', () => { this.dropSelected(); this._renderGrid(); });
  }

  set onEquip(fn) { this._onEquip = fn; }

  // ─── Equipment API ──────────────────────────────────────────────────────

  getEquipped(slot) { return this._equipped[slot] || null; }

  equip(slot, itemId) {
    if (!slot || !itemId) return;
    const item = getClothingItem(itemId);
    if (!item || item.slot !== slot) return;
    this._equipped[slot] = itemId;
    this._renderEquip();
    if (this._onEquip) this._onEquip(slot, itemId);
  }

  unequip(slot) {
    const prev = this._equipped[slot];
    this._equipped[slot] = null;
    this._renderEquip();
    if (this._onEquip && prev) this._onEquip(slot, null);
    return prev;
  }

  // ─── Inventory data ─────────────────────────────────────────────────────

  get inventory() { return this._inventory; }

  setInventory(arr) {
    this._inventory = arr.slice(0, 20);
    while (this._inventory.length < 20) this._inventory.push(null);
    this._renderGrid();
  }

  addItem(item) {
    const emptyIdx = this._inventory.indexOf(null);
    if (emptyIdx === -1) return false;
    this._inventory[emptyIdx] = { ...item };
    this._renderGrid();
    return true;
  }

  removeItem(idx) {
    if (idx < 0 || idx >= this._inventory.length) return null;
    const item = this._inventory[idx];
    this._inventory[idx] = null;
    this._renderGrid();
    return item;
  }

  hasItem(id) { return this._inventory.some(item => item && item.id === id); }

  sort() {
    this._inventory = this._inventory.filter(Boolean).sort((a, b) => (a.label || '').localeCompare(b.label || ''));
    while (this._inventory.length < 20) this._inventory.push(null);
  }

  dropSelected() {
    for (let i = 0; i < this._inventory.length; i++) {
      if (this._inventory[i]) {
        this._inventory[i] = null;
        break;
      }
    }
  }

  serialize() { return JSON.stringify(this._inventory.filter(Boolean)); }

  deserialize(json) {
    try {
      const items = JSON.parse(json);
      this._inventory = new Array(20).fill(null);
      for (let i = 0; i < Math.min(items.length, 20); i++) this._inventory[i] = items[i];
      this._renderGrid();
    } catch (e) { /* silent */ }
  }

  // ─── Rendering ──────────────────────────────────────────────────────────

  _renderGrid() {
    if (!this.invGrid) return;
    this.invGrid.innerHTML = '';
    for (let i = 0; i < this._inventory.length; i++) {
      const slot = document.createElement('div');
      slot.className = 'inv-slot';
      slot.dataset.index = i;
      const item = this._inventory[i];
      if (item) {
        slot.classList.add('has-item');
        if (item.type === 'clothing') {
          const dot = document.createElement('span');
          dot.style.display = 'inline-block';
          dot.style.width = '16px';
          dot.style.height = '16px';
          dot.style.borderRadius = '50%';
          const clothingDef = CLOTHING_CATALOG.find(c => c.id === item.id);
          dot.style.background = clothingDef ? CSS_COLORS[Object.keys(CSS_COLORS).find(k => COLORS[k] === clothingDef.color) || 'white'] : '#888';
          dot.title = item.label || item.id;
          slot.appendChild(dot);
        } else {
          slot.textContent = item.icon || '📦';
        }
        if (item.qty && item.qty > 1) {
          const qty = document.createElement('span');
          qty.className = 'qty';
          qty.textContent = item.qty;
          slot.appendChild(qty);
        }
      }
      this.invGrid.appendChild(slot);
    }
  }

  _renderEquip() {
    const slots = ['headwear', 'dress', 'legwear', 'armwear'];
    for (const s of slots) {
      const el = document.getElementById('equip-' + s);
      if (!el) continue;
      const parent = el.closest('.equip-slot');
      const itemId = this._equipped[s];
      if (itemId) {
        const def = getClothingItem(itemId);
        if (def) {
          const colorName = Object.keys(COLORS).find(k => COLORS[k] === def.color) || 'white';
          el.innerHTML = `<span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${CSS_COLORS[colorName]};vertical-align:middle;margin-right:4px;"></span>${def.name}`;
          if (parent) parent.classList.add('has-item');
          continue;
        }
      }
      el.textContent = '—';
      if (parent) parent.classList.remove('has-item');
    }
  }

  // ─── Drag-and-drop (inventory + equipment) ──────────────────────────────

  _bindDragDrop() {
    let dragIdx = -1;
    let dragEquipSlot = null;
    const ghost = this.dragGhost;

    const onPointerDown = (e) => {
      // Check inventory slot
      const invSlot = e.target.closest('.inv-slot');
      if (invSlot) {
        dragIdx = parseInt(invSlot.dataset.index);
        const item = this._inventory[dragIdx];
        if (!item) { dragIdx = -1; return; }
        dragEquipSlot = null;
        invSlot.classList.add('dragging');
        const def = item.type === 'clothing' ? getClothingItem(item.id) : null;
        ghost.textContent = def ? def.name : (item.icon || '📦');
        ghost.style.display = 'block';
        ghost.style.left = e.clientX + 'px';
        ghost.style.top = e.clientY + 'px';
        return;
      }
      // Check equip slot
      const equipSlot = e.target.closest('.equip-slot');
      if (equipSlot) {
        const slot = equipSlot.dataset.equip;
        const itemId = this._equipped[slot];
        if (!itemId) { dragEquipSlot = null; return; }
        dragEquipSlot = slot;
        dragIdx = -1;
        equipSlot.classList.add('dragging');
        const def = getClothingItem(itemId);
        ghost.textContent = def ? def.name : itemId;
        ghost.style.display = 'block';
        ghost.style.left = e.clientX + 'px';
        ghost.style.top = e.clientY + 'px';
      }
    };

    const onPointerMove = (e) => {
      if (dragIdx === -1 && !dragEquipSlot) return;
      ghost.style.left = e.clientX + 'px';
      ghost.style.top = e.clientY + 'px';

      document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
      // Highlight hovered inventory slot
      const invTarget = e.target.closest('.inv-slot');
      if (invTarget && parseInt(invTarget.dataset.index) !== dragIdx) {
        invTarget.classList.add('drag-over');
      }
      // Highlight hovered equip slot
      const equipTarget = e.target.closest('.equip-slot');
      if (equipTarget && equipTarget.dataset.equip !== dragEquipSlot) {
        equipTarget.classList.add('drag-over');
      }
    };

    const onPointerUp = (e) => {
      if (dragIdx === -1 && !dragEquipSlot) return;
      document.querySelectorAll('.dragging, .drag-over').forEach(el => el.classList.remove('dragging', 'drag-over'));
      ghost.style.display = 'none';

      const equipTarget = e.target.closest('.equip-slot');
      const invTarget = e.target.closest('.inv-slot');

      if (dragIdx !== -1) {
        // Dragging FROM inventory
        const item = this._inventory[dragIdx];
        if (equipTarget) {
          // Drop on equip slot
          const slot = equipTarget.dataset.equip;
          if (item && item.type === 'clothing') {
            const def = getClothingItem(item.id);
            if (def && def.slot === slot) {
              // Swap with currently equipped
              const prevEquip = this._equipped[slot];
              this._equipped[slot] = item.id;
              this._inventory[dragIdx] = prevEquip ? { type: 'clothing', id: prevEquip, label: (getClothingItem(prevEquip) || {}).name || prevEquip } : null;
              this._renderGrid();
              this._renderEquip();
              if (this._onEquip) {
                this._onEquip(slot, item.id);
                if (prevEquip) this._onEquip(slot, prevEquip); // will re-set
                // Actually the onEquip should just be called for the new item
              }
              // Re-call onEquip properly
              if (this._onEquip) this._onEquip(slot, item.id);
            }
          }
        } else if (invTarget) {
          const targetIdx = parseInt(invTarget.dataset.index);
          if (targetIdx !== dragIdx) {
            const temp = this._inventory[dragIdx];
            this._inventory[dragIdx] = this._inventory[targetIdx];
            this._inventory[targetIdx] = temp;
            this._renderGrid();
          }
        }
      } else if (dragEquipSlot) {
        // Dragging FROM equip slot
        const itemId = this._equipped[dragEquipSlot];
        if (!itemId) { dragEquipSlot = null; return; }

        if (invTarget) {
          // Drop on inventory
          const targetIdx = parseInt(invTarget.dataset.index);
          const targetItem = this._inventory[targetIdx];
          if (targetItem && targetItem.type === 'clothing') {
            const def = getClothingItem(targetItem.id);
            if (def && def.slot === dragEquipSlot) {
              // Swap
              this._equipped[dragEquipSlot] = targetItem.id;
              this._inventory[targetIdx] = { type: 'clothing', id: itemId, label: (getClothingItem(itemId) || {}).name || itemId };
              this._renderGrid();
              this._renderEquip();
              if (this._onEquip) this._onEquip(dragEquipSlot, targetItem.id);
              dragEquipSlot = null;
              return;
            }
          }
          // Unequip to inventory
          const emptyIdx = this._inventory.indexOf(null);
          if (emptyIdx !== -1) {
            this._inventory[emptyIdx] = { type: 'clothing', id: itemId, label: (getClothingItem(itemId) || {}).name || itemId };
            this._equipped[dragEquipSlot] = null;
            this._renderGrid();
            this._renderEquip();
            if (this._onEquip) this._onEquip(dragEquipSlot, null);
          }
        } else if (equipTarget) {
          const targetSlot = equipTarget.dataset.equip;
          if (targetSlot !== dragEquipSlot) {
            const targetItemId = this._equipped[targetSlot];
            this._equipped[targetSlot] = itemId;
            this._equipped[dragEquipSlot] = targetItemId;
            this._renderEquip();
            if (this._onEquip) {
              this._onEquip(targetSlot, itemId);
              if (targetItemId) this._onEquip(dragEquipSlot, targetItemId);
              else this._onEquip(dragEquipSlot, null);
            }
          }
        }
      }
      dragIdx = -1;
      dragEquipSlot = null;
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
  }

  // ─── HUD methods ────────────────────────────────────────────────────────

  setLoadProgress(pct) {
    this.loadBar.style.width = pct + '%';
    if (pct >= 100) setTimeout(() => this.loading.classList.add('hidden'), 500);
  }

  updateHP(current, max) {
    this.hpBar.style.width = (current / max) * 100 + '%';
    this.hpText.textContent = current;
  }

  updateStamina(current, max) {
    this.staminaBar.style.width = (current / max) * 100 + '%';
    this.staminaText.textContent = Math.round(current);
  }

  updateCoins(count) { this.coinText.textContent = count; }

  initWeaponSlots(weaponIds) {
    this.weaponHud.innerHTML = '';
    this.weaponSlots = [];
    weaponIds.forEach((id, i) => {
      const slot = document.createElement('div');
      slot.className = 'weapon-slot' + (i === 0 ? ' active' : '');
      slot.dataset.index = i;
      slot.style.position = 'relative';
      const icons = { sword: '🗡️', greatsword: '⚔️', polearm: '🔱', bow: '🏹', catalyst: '🔮', dagger: '🗡' };
      slot.textContent = icons[id] || '⚔';
      const key = document.createElement('span');
      key.className = 'key';
      key.textContent = i + 1;
      slot.appendChild(key);
      this.weaponHud.appendChild(slot);
      this.weaponSlots.push(slot);
    });
  }

  setActiveWeapon(index) {
    this.weaponSlots.forEach((s, i) => s.className = 'weapon-slot' + (i === index ? ' active' : ''));
    this.activeWeaponIndex = index;
  }

  setWeaponLevel(index, level) {
    const slot = this.weaponSlots[index];
    if (!slot) return;
    let badge = slot.querySelector('.weapon-level');
    if (level > 0) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'weapon-level';
        slot.appendChild(badge);
      }
      badge.textContent = '+' + level;
    } else {
      if (badge) badge.remove();
    }
  }

  showDamage(x, y, dmg, isCrit = false, isHeal = false) {
    const el = document.createElement('div');
    el.className = 'dmg-num';
    el.textContent = dmg;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.color = isHeal ? '#44ff88' : isCrit ? '#ffaa44' : '#ffddbb';
    el.style.fontSize = isCrit ? '1.8rem' : '1.4rem';
    this.damageNumbers.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }

  showBossHP(name, current, max) {
    this.bossHp.style.display = 'flex';
    this.bossHp.querySelector('.name').textContent = '✦ ' + name.toUpperCase();
    this.bossBar.style.width = (current / max) * 100 + '%';
  }

  hideBossHP() { this.bossHp.style.display = 'none'; }

  showInteract(text) { this.interactHint.textContent = text; this.interactHint.classList.add('show'); }
  hideInteract() { this.interactHint.classList.remove('show'); }

  toggleInventory() {
    this.inventoryPanel.classList.toggle('open');
    this._renderGrid();
    this._renderEquip();
  }

  updateInventory(outfit, weaponName) {
    // Equipment already rendered via _renderEquip called from equip/unequip
  }

  setInventoryOpen(open) {
    if (open) this.inventoryPanel.classList.add('open');
    else this.inventoryPanel.classList.remove('open');
    this._renderGrid();
    this._renderEquip();
  }

  updateMinimap(playerPos, interactables, monsters, yaw) {
    const canvas = document.getElementById('minimap-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const half = size / 2;
    const range = 80;
    const cosY = Math.cos(yaw);
    const sinY = Math.sin(yaw);
    ctx.clearRect(0, 0, size, size);
    for (const m of monsters) {
      if (!m.userData.alive) continue;
      const dx = m.position.x - playerPos.x;
      const dz = m.position.z - playerPos.z;
      const rx = dx * cosY - dz * sinY;
      const rz = dx * sinY + dz * cosY;
      const sx = half + (rx / range) * half;
      const sy = half + (rz / range) * half;
      if (sx < 0 || sx > size || sy < 0 || sy > size) continue;
      ctx.beginPath(); ctx.arc(sx, sy, 2.5, 0, Math.PI * 2); ctx.fillStyle = '#ff4444'; ctx.fill();
    }
    for (const obj of interactables) {
      const dx = obj.position.x - playerPos.x;
      const dz = obj.position.z - playerPos.z;
      const rx = dx * cosY - dz * sinY;
      const rz = dx * sinY + dz * cosY;
      const sx = half + (rx / range) * half;
      const sy = half + (rz / range) * half;
      if (sx < 0 || sx > size || sy < 0 || sy > size) continue;
      ctx.beginPath(); ctx.arc(sx, sy, 2, 0, Math.PI * 2);
      if (obj.userData.type === 'chest') ctx.fillStyle = '#ffdd44';
      else if (obj.userData.type === 'mushroom') ctx.fillStyle = '#dd88ff';
      else ctx.fillStyle = '#44dd88';
      ctx.fill();
    }
    ctx.beginPath(); ctx.arc(half, half, 3, 0, Math.PI * 2); ctx.fillStyle = '#ffffff'; ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.5)'; ctx.lineWidth = 1; ctx.stroke();
    ctx.beginPath(); const tip = 6;
    ctx.moveTo(half, half - tip); ctx.lineTo(half - 3, half + 2); ctx.lineTo(half + 3, half + 2); ctx.closePath();
    ctx.fillStyle = '#ffffff'; ctx.fill();
  }
}
