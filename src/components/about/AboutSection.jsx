import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="l md:w-1/2">
          <img 
            src="/images/building.webp" 
            alt="Hostel Building" 
            width={600} 
            height={400}
            className="rounded-lg shadow-lg h-[530px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Our Story</h2>
          <p className="mb-4">
Founded in 2023, Koushik Reddy Women's Hostel provides safe, comfortable, and affordable accommodation for women from all walks of life. Our mission is to create a home away from home where residents feel secure, supported, and empowered.     </p>
     <p className="mb-4">
         Come experience the warmth and security that makes our hostel a true sanctuary for women seeking a comfortable home during their academic or professional journeys.      
          </p>     <p className="mb-4">
         We offer modern amenities, a nurturing environment, and a strong sense of community to foster personal growth and independence. Our dedicated staff ensures a welcoming atmosphere that prioritizes safety and well-being above all else. We strive to be more than just a place to stay - we're a supportive community that celebrates diversity and empowers women to thrive.    
          </p>
           
        </div>
      </div>
    </div>
  )
}