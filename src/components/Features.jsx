import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Features() {
  const features = [
    { 
      title: "24/7 Security", 
      desc: "CCTV surveillance and security personnel",
      icon: "🔒"
    },
    { 
      title: "Housekeeping", 
      desc: "Daily cleaning and maintenance",
      icon: "🧹"
    },
    { 
      title: "Common Areas", 
      desc: "Lounge, kitchen",
      icon: "🏠"
    },
    { 
      title: "Wi-Fi", 
      desc: "High-speed internet throughout the premises",
      icon: "📶"
    },
 { 
      title: "GYM", 
      desc: "High-speed internet  throughout the premises(24/7)",
      icon: "🏋‍♀"
    }

    
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardHeader className="text-center">
                <span className="text-4xl mb-4">{feature.icon}</span>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}