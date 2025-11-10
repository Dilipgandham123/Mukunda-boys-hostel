import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function RoomPricing() {
  const pricing = [
    {
      name: "Standard Single",
      price: "$350/month",
      includes: ["Basic amenities", "Shared bathroom", "Common kitchen"]
    },
    {
      name: "Deluxe Single",
      price: "$450/month",
      includes: ["Premium amenities", "Private bathroom", "Kitchenette"]
    },
    {
      name: "Twin Sharing",
      price: "$250/month",
      includes: ["Basic amenities", "Shared bathroom", "Common kitchen"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Room Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {pricing.map((plan, i) => (
          <Card key={i} className={`hover-scale animate-fade-in ${i === 1 ? 'border-2 border-pink-500' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
            <CardHeader>
              <CardTitle className="text-purple-700">{plan.name}</CardTitle>
              <CardDescription className="text-2xl font-bold text-pink-600">{plan.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.includes.map((item, j) => (
                  <li key={j} className="flex items-center">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}