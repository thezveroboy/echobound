export class AudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.currentMusic = null;
    this.musicPlaying = false;
    this.unlocked = false;
    this._melodyTimer = null;
    this._melodyNotes = [];
    this._melodyIdx = 0;
    this._melodyTempo = 0;
  }

  unlock() {
    if (this.unlocked) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.5;
      this.masterGain.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.2;
      this.musicGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = 0.6;
      this.sfxGain.connect(this.masterGain);

      this.unlocked = true;
    } catch (e) {
      console.warn('Audio unavailable', e);
    }
  }

  _ensure() { if (!this.unlocked) this.unlock(); return !!this.ctx; }

  playSfx(type) {
    if (!this._ensure()) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.sfxGain);

    switch (type) {
      case 'hit': {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
        osc.start(); osc.stop(this.ctx.currentTime + 0.15);
        const osc2 = this.ctx.createOscillator();
        const g2 = this.ctx.createGain();
        osc2.connect(g2); g2.connect(this.sfxGain);
        osc2.type = 'square';
        osc2.frequency.setValueAtTime(100, this.ctx.currentTime);
        g2.gain.setValueAtTime(0.2, this.ctx.currentTime);
        g2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
        osc2.start(); osc2.stop(this.ctx.currentTime + 0.1);
        break;
      }
      case 'pickup': {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.1);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
        osc.start(); osc.stop(this.ctx.currentTime + 0.25);
        break;
      }
      case 'coin': {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1600, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
        osc.start(); osc.stop(this.ctx.currentTime + 0.2);
        const osc2 = this.ctx.createOscillator();
        const g2 = this.ctx.createGain();
        osc2.connect(g2); g2.connect(this.sfxGain);
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1200, this.ctx.currentTime + 0.1);
        osc2.frequency.exponentialRampToValueAtTime(2000, this.ctx.currentTime + 0.2);
        g2.gain.setValueAtTime(0.2, this.ctx.currentTime + 0.1);
        g2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
        osc2.start(this.ctx.currentTime + 0.1); osc2.stop(this.ctx.currentTime + 0.3);
        break;
      }
      case 'swing': {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
        osc.start(); osc.stop(this.ctx.currentTime + 0.12);
        break;
      }
      case 'step': {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
        osc.start(); osc.stop(this.ctx.currentTime + 0.06);
        break;
      }
      case 'heal': {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
        osc.start(); osc.stop(this.ctx.currentTime + 0.4);
        break;
      }
      case 'death': {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
        osc.start(); osc.stop(this.ctx.currentTime + 0.6);
        break;
      }
    }
  }

  // ─── Procedural melody ────────────────────────────────────────────────────

  _playNote(freq, startTime, duration, volume = 0.06) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.04);
    gain.gain.setValueAtTime(volume, startTime + duration - 0.08);
    gain.gain.linearRampToValueAtTime(0, startTime + duration);
    osc.connect(gain);
    gain.connect(this.musicGain);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.01);
    return { osc, gain };
  }

  startMusic(biome) {
    if (!this._ensure()) return;
    this.stopMusic();

    // Pentatonic scales (frequencies in Hz)
    const scales = {
      grassland: [262, 294, 330, 392, 440, 524, 588],  // C D E G A
      forest:    [220, 247, 277, 330, 370, 440, 494],   // A B C E F#
      desert:    [185, 208, 233, 277, 311, 370, 416],   // F# G# A# C# D#
      snow:      [294, 330, 392, 440, 524, 588, 660],   // D E G A C
      ruins:     [175, 196, 220, 262, 294, 349, 392],   // F G A C D
    };

    const scale = scales[biome] || scales.grassland;

    // Generate a melody: sequence of (scaleIndex, duration) pairs
    // Use simple patterns with occasional repeats
    const noteCount = 6 + Math.floor(Math.random() * 4);
    const melody = [];
    let prevIdx = -1;
    for (let i = 0; i < noteCount; i++) {
      let idx;
      do { idx = Math.floor(Math.random() * scale.length); } while (idx === prevIdx);
      prevIdx = idx;
      const dur = 0.3 + Math.random() * 0.4;
      melody.push({ idx, dur });
    }

    const tempo = 0.7 + Math.random() * 0.3; // seconds between note starts
    let totalDur = 0;
    for (const n of melody) totalDur += tempo; // simple: each note takes one tempo step

    this.currentMusic = { melody, scale, tempo, noteCount, totalDur };
    this.musicPlaying = true;

    this._scheduleMelody();
  }

  _scheduleMelody() {
    if (!this.currentMusic || !this.musicPlaying) return;

    const { melody, scale, tempo } = this.currentMusic;
    const now = this.ctx.currentTime;

    // Schedule a few notes ahead
    for (let i = 0; i < melody.length; i++) {
      const t = now + i * tempo;
      const n = melody[i];
      this._playNote(scale[n.idx], t, n.dur, 0.05);
    }

    // Schedule next round after this melody ends
    const roundTime = melody.length * tempo;
    this._melodyTimer = setTimeout(() => {
      // Regenerate melody (different each loop)
      const noteCount = 6 + Math.floor(Math.random() * 4);
      const newMelody = [];
      let prevIdx = -1;
      for (let i = 0; i < noteCount; i++) {
        let idx;
        do { idx = Math.floor(Math.random() * scale.length); } while (idx === prevIdx);
        prevIdx = idx;
        const dur = 0.3 + Math.random() * 0.4;
        newMelody.push({ idx, dur });
      }
      if (this.currentMusic) {
        this.currentMusic.melody = newMelody;
        this.currentMusic.noteCount = noteCount;
      }
      this._scheduleMelody();
    }, roundTime * 1000);
  }

  stopMusic() {
    if (this._melodyTimer) {
      clearTimeout(this._melodyTimer);
      this._melodyTimer = null;
    }
    this.currentMusic = null;
    this.musicPlaying = false;
  }
}

export const audio = new AudioManager();
