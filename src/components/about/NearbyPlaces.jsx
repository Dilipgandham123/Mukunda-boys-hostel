import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function NearbyPlaces() {
  const places = [
    {
      name: "University",
      distance: "10 min drive",
      icon: "🏛️"
    },
    {
      name: "Shopping Mall",
      distance: "15 min drive",
      icon: "🛍️"
    },
    {
      name: "Hospital",
      distance: "5 min drive",
      icon: "🏥"
    },
    {
      name: "Park",
      distance: "2 min walk",
      icon: "🌳"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Nearby Places</h2>
      <Card className="border-purple-200">
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {places.map((place, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                <span className="text-3xl">{place.icon}</span>
                <div>
                  <CardTitle className="text-purple-700">{place.name}</CardTitle>
                  <CardDescription>{place.distance}</CardDescription>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}