import { useEffect } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'

export default function N8nChat() {
  useEffect(() => {
    createChat({
      webhookUrl:
        'https://n8n.strohmpartners.com/webhook/fc2b023a-7199-4c36-856e-366d5d355392/chat',
    })
  }, [])

  return null
}