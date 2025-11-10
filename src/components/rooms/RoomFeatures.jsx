import { Card, CardContent } from '@/components/ui/card'

export default function RoomFeatures() {
  const features = [
    "Fully furnished rooms",
    "24/7 electricity backup",
    "Clean and hygienic environment",
    "Comfortable beds with quality mattresses",
    "Spacious storage areas",
    "Study tables and chairs",
    "Attached bathrooms with geysers",
    "Regular maintenance and repairs"
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Room Features</h2>
      <Card className="border-purple-200">
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-600">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}