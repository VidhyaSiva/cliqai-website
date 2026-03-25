import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import CTABanner from '@/components/CTABanner'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <WhyUs />
      <CTABanner />
      <ContactForm />
      <Footer />
    </main>
  )
}
