export type LeadKind = 'nivel' | 'clube'

const STORAGE_KEY = 'falae:leads'

/**
 * Envia um contato. Com VITE_FORM_ENDPOINT definido (ex.: Formspree, Getform),
 * faz POST JSON nele. Sem endpoint, guarda só no navegador (útil para demo).
 */
export async function submitLead(kind: LeadKind, data: Record<string, string>) {
  const lead = { kind, ...data, at: new Date().toISOString() }
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(lead),
    })
    if (!res.ok) throw new Error(`Falha ao enviar (${res.status})`)
    return
  }

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown[]
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved, lead]))
  } catch {
    // armazenamento indisponível: segue sem persistir
  }
  console.warn('[Falaê] VITE_FORM_ENDPOINT não definido: contato guardado apenas neste navegador.', lead)
}
