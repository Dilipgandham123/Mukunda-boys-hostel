import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ServiceTimings() {
  const timings = [
    { service: "Reception", time: "24/7" },
    { service: "Housekeeping", time: "8:00 AM - 6:00 PM" },
    { service: "Washing Machine", time: "9:00 AM - 9:00 PM" },
    { service: "Security", time: "24/7" },
  ]

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Service Timings</h2>
      <Card className="border-purple-200">
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {timings.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                <span className="font-semibold text-purple-700">{item.service}</span>
                <span className="text-gray-700">{item.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}