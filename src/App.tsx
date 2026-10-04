import Club from '@/components/Club'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/hero/Hero'
import HowItWorks from '@/components/HowItWorks'
import Plans from '@/components/Plans'
import Tagline from '@/components/Tagline'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper font-sans text-ink">
      <Header />
      <Hero />
      <Tagline />
      <Courses />
      <HowItWorks />
      <Plans />
      <Club />
      <Footer />
    </div>
  )
}
