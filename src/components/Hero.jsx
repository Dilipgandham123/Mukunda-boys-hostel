import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();
  const handleRoom = () => {
    router.push("/rooms");
  };

    const handleContact = () => {
    router.push("/contact");
  };
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <Image 
        src="/images/banner123.jpg" 
                // src="/images/bannerImag.jpg" 

        alt="Women Hostel" 
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
          Safe & Comfortable Living
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Experience the best women's hostel with modern amenities and a supportive community
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleRoom}>View Rooms</Button>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10" onClick={handleContact}  >Contact Us</Button>
        </div> */}
      </div>
    </div>
  )
}