import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TimingCard() {
  const timings = [
    { day: "Monday - Friday", time: "6:00 AM - 11:00 PM" },
    { day: "Saturday", time: "7:00 AM - 11:00 PM" },
    { day: "Sunday", time: "8:00 AM - 10:00 PM" }
  ]

  return (
    <Card className="border-purple-200">
      <CardHeader>
        <CardTitle className="text-purple-700">Hostel Timings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {timings.map((timing, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <span className="font-semibold text-purple-700">{timing.day}</span>
              <span className="text-gray-700">{timing.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}