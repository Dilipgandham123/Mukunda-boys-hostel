import ScrollSection from '@/components/ScrollSection'
import AboutSection from '@/components/about/AboutSection'
import OurValues from '@/components/about/OurValues'
import Testimonials from '@/components/about/Testimonials'
import Transportation from '@/components/about/Transportation'
import NearbyPlaces from '@/components/about/NearbyPlaces'

export default function About() {
  return (
    <>
      <ScrollSection className="bg-gradient-to-b from-purple-100 to-pink-100">
        <AboutSection />
      </ScrollSection>
      
      <ScrollSection className="bg-white">
        <OurValues />
      </ScrollSection>
      
      <ScrollSection className="bg-purple-50">
        <Testimonials />
      </ScrollSection>

    
{/* 
      <ScrollSection className="bg-white">
        <NearbyPlaces />
      </ScrollSection>
      <ScrollSection className="bg-purple-50">
        <Transportation />
      </ScrollSection>
     */}
      
    </>
  )
}