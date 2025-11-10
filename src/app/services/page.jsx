import ScrollSection from '@/components/ScrollSection'
import ServiceSection from '@/components/Services/ServiceSection'
import AdditionalServices from '@/components/Services/AdditionalServices'
import ServiceTimings from '@/components/Services/ServiceTimings'
import Gallery from '@/components/Gallery'

export default function Services() {
  return (
    <div className="min-h-screen">
      <ScrollSection className="bg-gradient-to-b from-purple-100 to-pink-100">
        <ServiceSection />
      </ScrollSection>
      
      <ScrollSection className="bg-white">
        <AdditionalServices />
                <ServiceTimings />

      </ScrollSection>
      
      <ScrollSection className="bg-purple-50">
        <Gallery />
      </ScrollSection>
    </div>
  )
}