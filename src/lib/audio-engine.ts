'use client'

/**
 * Procedural Audio Engine — Web Audio API
 * All sounds synthesized from oscillators + noise buffers.
 * Zero file downloads.
 */

class AudioEngine {
  private ctx: AudioContext | null = null
  private masterGain: GainNode | null = null
  private _enabled = false
  private _initialized = false

  get enabled() { return this._enabled }

  /** Lazy-init AudioContext on first user gesture (Chrome autoplay policy) */
  init() {
    if (this._initialized) return
    try {
      this.ctx = new AudioContext()
      this.masterGain = this.ctx.createGain()
      this.masterGain.gain.value = 0.5
      this.masterGain.connect(this.ctx.destination)
      this._initialized = true

      // Restore preference
      const pref = typeof localStorage !== 'undefined' ? localStorage.getItem('ht_sfx') : null
      this._enabled = pref !== '0'

      // Respect reduced motion
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this._enabled = false
      }
    } catch {
      this._initialized = false
    }
  }

  toggle() {
    this._enabled = !this._enabled
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ht_sfx', this._enabled ? '1' : '0')
    }
    return this._enabled
  }

  setEnabled(val: boolean) {
    this._enabled = val
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ht_sfx', val ? '1' : '0')
    }
  }

  private canPlay() {
    return this._initialized && this._enabled && this.ctx && this.masterGain && this.ctx.state === 'running'
  }

  private resumeCtx() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  /** Boot beep — 800Hz square wave, 80ms */
  bootBeep() {
    if (!this.canPlay()) return
    this.resumeCtx()
    const ctx = this.ctx!
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = 800
    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
    osc.connect(gain).connect(this.masterGain!)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.08)
  }

  /** Boot line appear — sine sweep 1200Hz→400Hz, 30ms chirp */
  bootLineAppear() {
    if (!this.canPlay()) return
    this.resumeCtx()
    const ctx = this.ctx!
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(1200, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.03)
    gain.gain.setValueAtTime(0.08, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03)
    osc.connect(gain).connect(this.masterGain!)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.04)
  }

  /** Key press — noise burst 15ms through bandpass 2kHz */
  keyPress() {
    if (!this.canPlay()) return
    this.resumeCtx()
    const ctx = this.ctx!
    const bufferSize = ctx.sampleRate * 0.015
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1
    const noise = ctx.createBufferSource()
    noise.buffer = buffer
    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 2000
    filter.Q.value = 1.5
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.015)
    noise.connect(filter).connect(gain).connect(this.masterGain!)
    noise.start(ctx.currentTime)
    noise.stop(ctx.currentTime + 0.02)
  }

  /** Transition whoosh — white noise, lowpass sweep 8kHz→200Hz, 400ms */
  transitionWhoosh() {
    if (!this.canPlay()) return
    this.resumeCtx()
    const ctx = this.ctx!
    const duration = 0.4
    const bufferSize = ctx.sampleRate * duration
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1
    const noise = ctx.createBufferSource()
    noise.buffer = buffer
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(8000, ctx.currentTime)
    filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + duration)
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.08, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
    noise.connect(filter).connect(gain).connect(this.masterGain!)
    noise.start(ctx.currentTime)
    noise.stop(ctx.currentTime + duration + 0.05)
  }

  /** Section enter — two-tone: 440Hz then 660Hz sine, 60ms each */
  sectionEnter() {
    if (!this.canPlay()) return
    this.resumeCtx()
    const ctx = this.ctx!
    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain = ctx.createGain()
    osc1.type = 'sine'
    osc1.frequency.value = 440
    osc2.type = 'sine'
    osc2.frequency.value = 660
    gain.gain.setValueAtTime(0.06, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)
    osc1.connect(gain)
    osc2.connect(gain)
    gain.connect(this.masterGain!)
    osc1.start(ctx.currentTime)
    osc1.stop(ctx.currentTime + 0.06)
    osc2.start(ctx.currentTime + 0.06)
    osc2.stop(ctx.currentTime + 0.12)
  }

  /** Hover tick — 6kHz sine, 8ms, very subtle */
  hoverTick() {
    if (!this.canPlay()) return
    this.resumeCtx()
    const ctx = this.ctx!
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = 6000
    gain.gain.setValueAtTime(0.04, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.008)
    osc.connect(gain).connect(this.masterGain!)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.01)
  }

  /** Glitch burst — ring modulator: 200Hz + 1337Hz, 100ms */
  glitchBurst() {
    if (!this.canPlay()) return
    this.resumeCtx()
    const ctx = this.ctx!
    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain1 = ctx.createGain()
    const gain2 = ctx.createGain()
    osc1.type = 'sawtooth'
    osc1.frequency.value = 200
    osc2.type = 'square'
    osc2.frequency.value = 1337
    gain1.gain.setValueAtTime(0.1, ctx.currentTime)
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
    gain2.gain.setValueAtTime(0.06, ctx.currentTime)
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
    osc1.connect(gain1).connect(this.masterGain!)
    osc2.connect(gain2).connect(this.masterGain!)
    osc1.start(ctx.currentTime)
    osc1.stop(ctx.currentTime + 0.1)
    osc2.start(ctx.currentTime)
    osc2.stop(ctx.currentTime + 0.1)
  }
}

export const audioEngine = new AudioEngine()
