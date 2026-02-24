'use client'

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from 'react'
import { gsap, ScrambleTextPlugin } from '@/lib/gsap-config'
import { audioEngine } from '@/lib/audio-engine'

/* ── Command definitions ── */
interface CmdOutput {
  text: string
  color?: string
  link?: string
}

const COMMANDS: Record<string, {
  output: (locale: string) => CmdOutput[]
}> = {
  help: {
    output: () => [
      { text: '╔══════════════════════════════════════════╗', color: '#B87333' },
      { text: '║  VAULT-TEC PERSONNEL TERMINAL v4.2.77   ║', color: '#B87333' },
      { text: '╠══════════════════════════════════════════╣', color: '#B87333' },
      { text: '║  help      — This help menu              ║', color: '#6ee7d0' },
      { text: '║  email     — Communication link           ║', color: '#6ee7d0' },
      { text: '║  phone     — Voice channel                ║', color: '#6ee7d0' },
      { text: '║  github    — Source archives               ║', color: '#6ee7d0' },
      { text: '║  linkedin  — Personnel network             ║', color: '#6ee7d0' },
      { text: '║  location  — Current coordinates           ║', color: '#6ee7d0' },
      { text: '║  skills    — Operative capabilities        ║', color: '#6ee7d0' },
      { text: '║  about     — Personnel dossier             ║', color: '#6ee7d0' },
      { text: '║  clear     — Purge terminal buffer         ║', color: '#6ee7d0' },
      { text: '╚══════════════════════════════════════════╝', color: '#B87333' },
    ],
  },
  email: {
    output: () => [
      { text: '> ESTABLISHING COMM LINK...', color: '#ffb641' },
      { text: '> TARGET: turhanhamza@gmail.com', color: '#6ee7d0' },
      { text: '> STATUS: CHANNEL OPEN', color: '#6ee7d0' },
      { text: '> [LAUNCHING MAIL CLIENT...]', color: '#B87333', link: 'mailto:turhanhamza@gmail.com' },
    ],
  },
  phone: {
    output: () => [
      { text: '> VOICE CHANNEL INITIALIZATION...', color: '#ffb641' },
      { text: '> FREQUENCY: +90 554 541 7561', color: '#6ee7d0' },
      { text: '> ENCRYPTION: AES-256', color: '#6ee7d0' },
      { text: '> [OPENING VOICE LINK...]', color: '#B87333', link: 'tel:+905545417561' },
    ],
  },
  github: {
    output: () => [
      { text: '> ACCESSING SOURCE ARCHIVES...', color: '#ffb641' },
      { text: '> REPOSITORY: github.com/elkekoitan', color: '#6ee7d0' },
      { text: '> CLEARANCE: PUBLIC', color: '#6ee7d0' },
      { text: '> [NAVIGATING TO ARCHIVES...]', color: '#B87333', link: 'https://github.com/elkekoitan' },
    ],
  },
  linkedin: {
    output: () => [
      { text: '> PERSONNEL NETWORK ACCESS...', color: '#ffb641' },
      { text: '> OPERATIVE: Hamza Turhan', color: '#6ee7d0' },
      { text: '> NETWORK: LinkedIn', color: '#6ee7d0' },
      { text: '> [CONNECTING TO NETWORK...]', color: '#B87333', link: 'https://www.linkedin.com/in/hmztrhn/' },
    ],
  },
  location: {
    output: (locale) => [
      { text: '> GEOLOCATION SERVICE ACTIVE', color: '#ffb641' },
      { text: `> COORDINATES: 41.0082°N, 28.9784°E`, color: '#6ee7d0' },
      { text: `> SECTOR: ${locale === 'ru' ? 'Стамбул, Турция' : locale === 'en' ? 'Istanbul, Turkey' : 'İstanbul, Türkiye'}`, color: '#6ee7d0' },
      { text: '> RADIATION: MINIMAL', color: '#a3e635' },
    ],
  },
  skills: {
    output: () => [
      { text: '> OPERATIVE CAPABILITIES ASSESSMENT:', color: '#ffb641' },
      { text: '  React/Next.js  [████████████████░░] 90%', color: '#6ee7d0' },
      { text: '  TypeScript      [███████████████░░░] 88%', color: '#6ee7d0' },
      { text: '  Python          [████████████████░░] 90%', color: '#6ee7d0' },
      { text: '  AI/ML           [██████████████░░░░] 82%', color: '#6ee7d0' },
      { text: '  Node.js         [███████████████░░░] 85%', color: '#6ee7d0' },
      { text: '  Flutter         [████████████░░░░░░] 70%', color: '#2ecfff' },
      { text: '  DevOps          [██████████████░░░░] 78%', color: '#2ecfff' },
      { text: '> STATUS: COMBAT READY', color: '#a3e635' },
    ],
  },
  about: {
    output: (locale) => {
      const lines: CmdOutput[] = [
        { text: '> ══════════ PERSONNEL DOSSIER ══════════', color: '#B87333' },
        { text: '> NAME: Hamza Turhan', color: '#6ee7d0' },
        { text: '> ROLE: Full-Stack Developer & AI Architect', color: '#6ee7d0' },
        { text: '> CLEARANCE: TOP SECRET', color: '#ffb641' },
        { text: '> ', color: '#6ee7d0' },
      ]
      if (locale === 'tr') {
        lines.push(
          { text: '> Modern web teknolojileri, AI/ML çözümleri', color: '#a09880' },
          { text: '> ve algoritmik ticaret platformları uzmanı.', color: '#a09880' },
        )
      } else if (locale === 'ru') {
        lines.push(
          { text: '> Специализируюсь на современных веб-технологиях,', color: '#a09880' },
          { text: '> AI/ML-решениях и торговых платформах.', color: '#a09880' },
        )
      } else {
        lines.push(
          { text: '> Specializing in modern web technologies,', color: '#a09880' },
          { text: '> AI/ML solutions & algorithmic trading platforms.', color: '#a09880' },
        )
      }
      lines.push({ text: '> ══════════════════════════════════════', color: '#B87333' })
      return lines
    },
  },
}

/* ── History line type ── */
interface HistoryLine {
  id: number
  type: 'input' | 'output'
  text: string
  color?: string
  scramble?: boolean
}

/* ── Component ── */
interface TerminalEmulatorProps {
  locale: string
}

export default function TerminalEmulator({ locale }: TerminalEmulatorProps) {
  const [history, setHistory] = useState<HistoryLine[]>([
    { id: 0, type: 'output', text: '> VAULT-TEC PERSONNEL TERMINAL v4.2.77', color: '#B87333' },
    { id: 1, type: 'output', text: '> Type "help" for available commands.', color: '#6ee7d0' },
    { id: 2, type: 'output', text: '> ', color: '#6ee7d0' },
  ])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const [isProcessing, setIsProcessing] = useState(false)
  const idCounter = useRef(3)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRefs = useRef<Map<number, HTMLSpanElement>>(new Map())

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  // Focus input on click anywhere in terminal
  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const addOutputLines = useCallback((lines: CmdOutput[]) => {
    setIsProcessing(true)
    let idx = 0

    const addNext = () => {
      if (idx >= lines.length) {
        setIsProcessing(false)
        return
      }
      const line = lines[idx]
      const lineId = idCounter.current++
      setHistory(prev => [...prev, {
        id: lineId,
        type: 'output',
        text: line.text,
        color: line.color,
        scramble: true,
      }])
      audioEngine.bootLineAppear()

      // Open link after short delay
      if (line.link) {
        setTimeout(() => {
          window.open(line.link, '_blank', 'noopener,noreferrer')
        }, 1200)
      }

      idx++
      setTimeout(addNext, 60 + Math.random() * 40)
    }

    setTimeout(addNext, 80)
  }, [])

  const handleSubmit = useCallback(() => {
    if (isProcessing) return
    const trimmed = input.trim().toLowerCase()
    if (!trimmed) return

    // Add input to history
    const inputId = idCounter.current++
    setHistory(prev => [...prev, {
      id: inputId,
      type: 'input',
      text: `visitor@vault-tec:~$ ${trimmed}`,
    }])
    setCmdHistory(prev => [trimmed, ...prev].slice(0, 20))
    setHistoryIdx(-1)
    setInput('')

    if (trimmed === 'clear') {
      setTimeout(() => {
        setHistory([{
          id: idCounter.current++,
          type: 'output',
          text: '> Terminal buffer purged.',
          color: '#6ee7d0',
        }])
      }, 100)
      return
    }

    const cmd = COMMANDS[trimmed]
    if (cmd) {
      addOutputLines(cmd.output(locale))
    } else {
      const errorId = idCounter.current++
      setTimeout(() => {
        setHistory(prev => [...prev, {
          id: errorId,
          type: 'output',
          text: `> ERROR: Command "${trimmed}" not recognized. Type "help" for available commands.`,
          color: '#ff6b6b',
          scramble: true,
        }])
        audioEngine.bootLineAppear()
      }, 100)
    }
  }, [input, isProcessing, locale, addOutputLines])

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
      return
    }

    audioEngine.keyPress()

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length > 0) {
        const newIdx = Math.min(historyIdx + 1, cmdHistory.length - 1)
        setHistoryIdx(newIdx)
        setInput(cmdHistory[newIdx])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1
        setHistoryIdx(newIdx)
        setInput(cmdHistory[newIdx])
      } else {
        setHistoryIdx(-1)
        setInput('')
      }
    }
  }, [handleSubmit, cmdHistory, historyIdx])

  // ScrambleText effect on new output lines
  const setOutputRef = useCallback((id: number, el: HTMLSpanElement | null) => {
    if (el) {
      outputRefs.current.set(id, el)
    }
  }, [])

  useEffect(() => {
    const lastLine = history[history.length - 1]
    if (!lastLine || !lastLine.scramble) return
    const el = outputRefs.current.get(lastLine.id)
    if (!el) return

    const originalText = lastLine.text
    gsap.fromTo(el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.05,
        onComplete: () => {
          gsap.to(el, {
            duration: 0.4,
            scrambleText: {
              text: originalText,
              chars: '01!<>{}[]/',
              speed: 0.5,
            },
          })
        },
      }
    )
  }, [history])

  return (
    <div className="terminal-frame h-full flex flex-col" onClick={focusInput}>
      {/* Header */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <span className="status-dot" />
          <span>VAULT-TEC_TERMINAL</span>
        </div>
        <span className="text-vault-turquoise/50 text-[0.6rem]">v4.2.77</span>
      </div>

      {/* Output area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 min-h-[320px] max-h-[420px] scrollbar-terminal"
        style={{
          background: 'rgba(10, 10, 8, 0.6)',
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 6px)',
        }}
      >
        {history.map((line) => (
          <div key={line.id} className="font-terminal text-xs leading-relaxed whitespace-pre-wrap">
            {line.type === 'input' ? (
              <span className="text-vault-amber">{line.text}</span>
            ) : (
              <span
                ref={(el) => line.scramble ? setOutputRef(line.id, el) : undefined}
                style={{ color: line.color ?? '#6ee7d0' }}
              >
                {line.text}
              </span>
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-0 font-terminal text-xs mt-1">
          <span className="text-vault-amber flex-shrink-0">visitor@vault-tec:~$&nbsp;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isProcessing}
            className="flex-1 bg-transparent border-none outline-none text-vault-turquoise font-terminal text-xs caret-vault-turquoise"
            style={{ caretColor: '#6ee7d0' }}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
          <span
            className="inline-block w-[7px] h-[14px] bg-vault-turquoise ml-px"
            style={{
              animation: 'blink-cursor 1s step-end infinite',
              opacity: isProcessing ? 0 : 1,
            }}
          />
        </div>
      </div>
    </div>
  )
}
