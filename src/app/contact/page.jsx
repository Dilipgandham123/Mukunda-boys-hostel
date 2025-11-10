import ScrollSection from '@/components/ScrollSection'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import SocialMedia from '@/components/SocialMedia'
import LocationSection from '@/components/contact/LocationSection'

export default function Contact() {
  return (
    <>
    
      <ScrollSection className="bg-gradient-to-b from-purple-100 to-pink-100">
        <ContactForm />
      </ScrollSection>
      
      <ScrollSection className="bg-white">
        <ContactInfo />
      </ScrollSection>
        <ScrollSection className="bg-purple-50">
        <LocationSection />
      </ScrollSection>
    
    </>
  )
}