import ScrollSection from '@/components/ScrollSection'
import LocationSection from '@/components/contact/LocationSection'
import Transportation from '@/components/about/Transportation'
import NearbyPlaces from '@/components/about/NearbyPlaces'

export default function Location() {
  return (
    <>
      <ScrollSection className="bg-gradient-to-b from-purple-100 to-pink-100">
        <LocationSection />
      </ScrollSection>
      
      <ScrollSection className="bg-white">
        <Transportation />
      </ScrollSection>
      
      <ScrollSection className="bg-purple-50">
        <NearbyPlaces />
      </ScrollSection>
       
    </>
  )
}