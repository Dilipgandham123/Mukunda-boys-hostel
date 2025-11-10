import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function OurValues() {
  const values = [
    { title: "Safety and Security", desc: "CCTV surveillance and 24/7 security personnel" },
    { title: "Community Building", desc: "Regular social and educational activities" },
    { title: "Respect and Diversity", desc: "Inclusive environment for all women" },
    { title: "Comfort and Convenience", desc: "Modern amenities and facilities" }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Our Values</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {values.map((value, i) => (
          <Card key={i} className="hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <CardHeader>
              <CardTitle className="text-purple-700">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{value.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 