'use client';

import ScrollSection from '@/components/ScrollSection';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FoodSection from '@/components/FoodSection';
import RoomSection from '@/components/rooms/RoomSection';

export default function Home() {
  return (
    <>
      <div className="bg-hostel-light">
        <ScrollSection className="bg-gradient-to-b from-hostel-primary to-hostel-secondary">
          <Hero />
        </ScrollSection>

        <ScrollSection className="bg-white">
          <Features />
        </ScrollSection>

        <ScrollSection className="bg-gradient-to-b from-white to-hostel-light">
          <FoodSection />
        </ScrollSection>

        <ScrollSection className="bg-white">
          <RoomSection />
        </ScrollSection>
      </div>
    </>
  );
}
