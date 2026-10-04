import { useState } from 'react'
import type { FormEvent } from 'react'
import { submitLead } from '@/lib/leads'
import type { LeadKind } from '@/lib/leads'

export type LeadStatus = 'idle' | 'sending' | 'done' | 'error'

export function useLeadForm(kind: LeadKind) {
  const [status, setStatus] = useState<LeadStatus>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    setStatus('sending')
    try {
      await submitLead(kind, data)
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return { status, onSubmit }
}
