'use client';

import ScrollSection from '@/components/ScrollSection';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FoodSection from '@/components/FoodSection';
import ServiceTimings from '@/components/Services/ServiceTimings';
import RoomSection from '@/components/rooms/RoomSection';

export default function Home() {
  return (
    <>
      <div>
        <ScrollSection className="bg-gradient-to-b from-purple-100 to-pink-100">
          <Hero />
        </ScrollSection>
        
        <ScrollSection className="bg-white">
          <Features />
        </ScrollSection>
        
        <ScrollSection className="bg-purple-50">
          <FoodSection />
        </ScrollSection>
        <ScrollSection className="bg-white">

        <RoomSection />
                </ScrollSection>

      </div>
    </>
  )
}