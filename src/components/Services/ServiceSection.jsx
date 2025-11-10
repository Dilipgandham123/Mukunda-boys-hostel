import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ServiceCard from '@/components/Services/ServiceCard'

export default function ServiceSection() {
  const services = [
    { 
      id: 1,
      title: "24/7 Security", 
      desc: "CCTV surveillance and security personnel",
      icon: "🔒"
    },
    { 
      id: 2,
      title: "Housekeeping", 
      desc: "Daily cleaning and maintenance",
      icon: "🧹"
    },
    { 
      id: 3,
      title: "Common Areas", 
      desc: "Lounge, kitchen",
      icon: "🏠"
    },
    { 
      id: 4,
      title: "Wi-Fi", 
      desc: "High-speed internet throughout the premises",
      icon: "📶"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Our Services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}