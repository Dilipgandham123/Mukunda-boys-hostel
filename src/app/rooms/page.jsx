import ScrollSection from '@/components/ScrollSection'
import RoomSection from '@/components/rooms/RoomSection'
import RoomFeatures from '@/components/rooms/RoomFeatures'
import RoomPricing from '@/components/rooms/RoomPricing'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/about/Testimonials'

export default function Rooms() {
  return (
    <>
      <ScrollSection className="bg-gradient-to-b from-purple-100 to-pink-100">
        <RoomSection />
      </ScrollSection>
      
      <ScrollSection className="bg-white">
        <RoomFeatures />
      </ScrollSection>
   
      <ScrollSection className="bg-white">
        <Gallery />
      </ScrollSection>
    </>
  )
}