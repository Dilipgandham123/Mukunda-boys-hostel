import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Transportation() {
  const transportOptions = [
    {
      name: "Metro Station",
      desc: "5 min walk from hostel",
      icon: "🚇"
    },
    {
      name: "Bus Stop",
      desc: "Right outside the hostel",
      icon: "🚌"
    },
    {
      name: "University Shuttle",
      desc: "Regular service to nearby colleges",
      icon: "🚐"
    },
    {
      name: "Taxi/Ride Service",
      desc: "Available on request",
      icon: "🚗"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Transportation</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {transportOptions.map((option, i) => (
          <Card key={i} className="hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <CardHeader className="flex items-center space-x-4">
              <span className="text-3xl">{option.icon}</span>
              <div>
                <CardTitle>{option.name}</CardTitle>
                <CardDescription>{option.desc}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}