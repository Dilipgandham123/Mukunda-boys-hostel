import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '../ui/button'

export default function ContactInfo() {
  const contactInfo = [
    {
      title: "Phone Number",
      info: "+91 93923 30789",
      icon: "📞"
    },
    {
      title: "Second Phone Number",
      info: "+91 83286 85787",
      icon: "📞"
    },
    
    {
      title: "Email",
      info: "ambatisrinivasulu138@gmail.com",
      icon: "📧"
    },
    {
      title: "Address",
      info: "Madhapur, Hyderabad,Telangana,India, 500081",
      icon: "🏠"
    }
  ]

  return (
    <div>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Contact Information</h2>
      <Card className="border-purple-200">
        <CardContent>
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <CardTitle className="text-purple-700">{item.title}</CardTitle>
                  <CardDescription>{item.info}</CardDescription>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
     {/* <div className="max-w-4xl mx-auto my-12 bg-purple-50 p-12 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Follow Us</h2>
      <div className="flex justify-center space-x-6">
        <Button variant="outline" size="lg" className="hover:bg-purple-100 hover:text-purple-700 transition-colors">
          <span className="mr-2">📘</span> Facebook
        </Button>
        <Button variant="outline" size="lg" className="hover:bg-purple-100 hover:text-purple-700 transition-colors">
          <span className="mr-2">📱</span> Instagram
        </Button>
        <Button variant="outline" size="lg" className="hover:bg-purple-100 hover:text-purple-700 transition-colors">
          <span className="mr-2">🐦</span> Twitter
        </Button>
      </div>
    
    </div> */}
    </div>
  )
}