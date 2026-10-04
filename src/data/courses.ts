export interface Course {
  lang: string
  no: string
  greet: string
  levels: string
  photo: string
  sun: string
  ground: string
  ink: string
  tilt: string
}

export const courses: Course[] = [
  { lang: 'Inglês', no: 'Nº 01', greet: 'Hello!', levels: 'A1–C1', photo: '#2F4B7C', sun: '#F1E6C8', ground: '#22385F', ink: '#F1E6C8', tilt: '-1.5deg' },
  { lang: 'Espanhol', no: 'Nº 02', greet: '¡Hola!', levels: 'A1–C1', photo: '#F5D33F', sun: '#E2553A', ground: '#3E8E7E', ink: '#8C2A1C', tilt: '1deg' },
  { lang: 'Francês', no: 'Nº 03', greet: 'Bonjour!', levels: 'A1–B2', photo: '#A9C8D6', sun: '#F2C14E', ground: '#56677A', ink: '#1F2A44', tilt: '-0.5deg' },
  { lang: 'Italiano', no: 'Nº 04', greet: 'Ciao!', levels: 'A1–B2', photo: '#EAD9B8', sun: '#F2A33C', ground: '#2E8C93', ink: '#1F3D52', tilt: '1.5deg' },
  { lang: 'Alemão', no: 'Nº 05', greet: 'Hallo!', levels: 'A1–B2', photo: '#C9C0B1', sun: '#8C8376', ground: '#5A5248', ink: '#2A241E', tilt: '-1deg' },
  { lang: 'Japonês', no: 'Nº 07', greet: 'こんにちは', levels: 'A1–B1', photo: '#EBC8A2', sun: '#B6402C', ground: '#6E7FA0', ink: '#8C2A1C', tilt: '0.8deg' },
]
