'use client'

import { useEffect, useRef, useState } from 'react'

const WEBHOOK_URL =
  'https://n8n.strohmpartners.com/webhook/fc2b023a-7199-4c36-856e-366d5d355392/chat'
const TITLE = 'Chat with us'
const SUBTITLE = 'Usually replies within a minute'
const BRAND = '#437F9C'
const BRAND_DARK = '#2f5d74'
const BRAND_LIGHT = '#a4c4d4'

function extractReply(rawText: string): string {
  try {
    const data = JSON.parse(rawText)
    if (typeof data.reply === 'string' && data.reply) return data.reply
    if (typeof data.output === 'string' && data.output) return data.output
    if (typeof data.text === 'string' && data.text) return data.text
    if (typeof data.message === 'string' && data.message) return data.message
    if (data.choices?.[0]?.message)
      return data.choices[0].message.content || data.choices[0].message
    if (data.content?.[0]?.text) return data.content[0].text
  } catch {
    /* not JSON */
  }
  return rawText
}

function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  let sid = localStorage.getItem('hermes_chat_sid')
  if (!sid) {
    sid =
      (crypto.randomUUID && crypto.randomUUID()) ||
      `s-${Date.now()}-${Math.random().toString(36).slice(2)}`
    localStorage.setItem('hermes_chat_sid', sid)
  }
  return sid
}

export default function N8nChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; who: 'user' | 'bot' }[]>([])
  const [busy, setBusy] = useState(false)
  const [input, setInput] = useState('')
  const [hoverBtn, setHoverBtn] = useState(false)
  const [hoverSend, setHoverSend] = useState(false)
  const sidRef = useRef('')
  const msgsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    sidRef.current = getSessionId()
  }, [])

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight
  }, [messages])

  async function handleSend(e: React.FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    setInput('')
    setMessages((m) => [...m, { text, who: 'user' }])
    setBusy(true)

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatInput: text,
          sessionId: sidRef.current,
          widgetId: 'strohm-partners',
        }),
      })
      const raw = await res.text()
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          { text: 'Something went wrong. Please try again.', who: 'bot' },
        ])
        return
      }
      const reply = extractReply(raw)
      setMessages((m) => [...m, { text: reply || '(empty reply)', who: 'bot' }])
    } catch {
      setMessages((m) => [
        ...m,
        { text: 'I could not reach the chat service. Please try again.', who: 'bot' },
      ])
    } finally {
      setBusy(false)
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 99999, fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" }}>
      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 72,
            right: 0,
            width: 340,
            maxWidth: 'calc(100vw - 40px)',
            height: 480,
            maxHeight: 'calc(100vh - 120px)',
            background: '#fff',
            borderRadius: 14,
            boxShadow: '0 16px 48px rgba(0,0,0,.22)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          }}
        >
          {/* Header */}
          <div style={{ background: BRAND, color: '#fff', padding: '14px 16px' }}>
            <div style={{ fontWeight: 600, fontSize: 15 }}>{TITLE}</div>
            <div style={{ fontSize: 12, opacity: 0.9, marginTop: 2 }}>{SUBTITLE}</div>
          </div>

          {/* Messages */}
          <div
            ref={msgsRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: 12,
              background: '#f9fafb',
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  margin: '6px 0',
                  padding: '9px 12px',
                  borderRadius: 12,
                  maxWidth: '80%',
                  fontSize: 14,
                  lineHeight: 1.4,
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  marginLeft: m.who === 'user' ? 'auto' : undefined,
                  background: m.who === 'user' ? BRAND : '#fff',
                  color: m.who === 'user' ? '#fff' : '#111',
                  border: m.who === 'user' ? undefined : '1px solid #e5e7eb',
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSend}
            style={{
              display: 'flex',
              borderTop: '1px solid #e5e7eb',
              background: '#fff',
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                padding: 14,
                fontSize: 14,
                outline: 'none',
                fontFamily: 'inherit',
                color: '#111',
                background: '#fff',
                caretColor: BRAND,
              }}
            />
            <button
              type="submit"
              disabled={busy}
              onMouseEnter={() => setHoverSend(true)}
              onMouseLeave={() => setHoverSend(false)}
              style={{
                background: busy ? BRAND_LIGHT : hoverSend ? BRAND_DARK : BRAND,
                color: '#fff',
                border: 'none',
                padding: '0 18px',
                cursor: busy ? 'not-allowed' : 'pointer',
                fontWeight: 600,
                fontSize: 14,
                transition: 'background .15s ease',
              }}
            >
              {busy ? 'Sending' : 'Send'}
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHoverBtn(true)}
        onMouseLeave={() => setHoverBtn(false)}
        aria-label="Open chat"
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: hoverBtn ? BRAND_DARK : BRAND,
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,.18)',
          fontSize: 24,
          transition: 'background .15s ease',
        }}
      >
        💬
      </button>
    </div>
  )
}