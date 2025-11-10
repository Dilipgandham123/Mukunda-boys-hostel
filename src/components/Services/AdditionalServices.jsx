import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Gamepad2 } from 'lucide-react'

export default function AdditionalServices() {
 const additionalServices = [
 
  
    { 
      title: "Entertainment", 
      desc: "TV room ",
      icon: "🎬"
    },
    { 
      title: "Geyser", 
      desc: "24/7 hot water supply",
      icon: "🚿" 
    },
      { 
      title: "Gym", 
      desc: " Regular gym improved physical health ",
      icon: "🏋‍♀"
    },
   
    { 
      title: "Washing Machines", 
      desc: "Fully automatic machines",
      icon: "👗"  
    },
  ]
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Additional Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalServices.map((service, i) => (
          <Card key={i} className="hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <CardHeader className="text-center">
              <span className="text-4xl mb-4">{service.icon}</span>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}