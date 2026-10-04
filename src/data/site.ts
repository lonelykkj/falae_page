/** Número fictício: trocar pelo WhatsApp real da escola (DDI + DDD + número, só dígitos). */
export const WHATSAPP_NUMBER = '5511912345678'

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
