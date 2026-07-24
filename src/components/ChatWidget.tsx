'use client'

import dynamic from 'next/dynamic'

const N8nChat = dynamic(() => import('./N8nChat'), { ssr: false })

export default function ChatWidget() {
  return <N8nChat />
}