import Club from '@/components/Club'
import Courses from '@/components/Courses'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/hero/Hero'
import HowItWorks from '@/components/HowItWorks'
import LevelTest from '@/components/LevelTest'
import Plans from '@/components/Plans'
import Tagline from '@/components/Tagline'
import Teachers from '@/components/Teachers'
import Testimonials from '@/components/Testimonials'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper font-sans text-ink">
      <Header />
      <Hero />
      <Tagline />
      <Courses />
      <HowItWorks />
      <Teachers />
      <Plans />
      <Testimonials />
      <LevelTest />
      <Faq />
      <Club />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
