// DOM UI manager
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
    this.invHead = document.getElementById('inv-head');
    this.invDress = document.getElementById('inv-dress');
    this.invLegs = document.getElementById('inv-legs');
    this.invFeet = document.getElementById('inv-feet');
    this.invWeapon = document.getElementById('inv-weapon');
    this.loadBar = document.getElementById('load-bar');
    this.loading = document.getElementById('loading');
    this.coinText = document.getElementById('coin-text');

    this.weaponSlots = [];
    this.activeWeaponIndex = 0;
  }

  setLoadProgress(pct) {
    this.loadBar.style.width = pct + '%';
    if (pct >= 100) {
      setTimeout(() => this.loading.classList.add('hidden'), 500);
    }
  }

  updateHP(current, max) {
    const pct = (current / max) * 100;
    this.hpBar.style.width = pct + '%';
    this.hpText.textContent = current;
  }

  updateStamina(current, max) {
    const pct = (current / max) * 100;
    this.staminaBar.style.width = pct + '%';
    this.staminaText.textContent = Math.round(current);
  }

  updateCoins(count) {
    this.coinText.textContent = count;
  }

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
    this.weaponSlots.forEach((s, i) => {
      s.className = 'weapon-slot' + (i === index ? ' active' : '');
    });
    this.activeWeaponIndex = index;
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

  hideBossHP() {
    this.bossHp.style.display = 'none';
  }

  showInteract(text) {
    this.interactHint.textContent = text;
    this.interactHint.classList.add('show');
  }

  hideInteract() {
    this.interactHint.classList.remove('show');
  }

  toggleInventory() {
    this.inventoryPanel.classList.toggle('open');
  }

  updateInventory(outfit, weaponName) {
    this.invHead.textContent = outfit.headwear || '—';
    this.invDress.textContent = outfit.dress || '—';
    this.invLegs.textContent = outfit.legwear || '—';
    this.invFeet.textContent = outfit.footwear || '—';
    this.invWeapon.textContent = weaponName || '—';
  }

  setInventoryOpen(open) {
    if (open) this.inventoryPanel.classList.add('open');
    else this.inventoryPanel.classList.remove('open');
  }
}
