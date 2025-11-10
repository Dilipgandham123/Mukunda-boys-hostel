import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ServiceCard({ service }) {
  return (
    <Card className="hover-scale animate-fade-in" style={{ animationDelay: `${service.id * 0.1}s` }}>
      <CardHeader className="text-center">
        <span className="text-4xl mb-4">{service.icon}</span>
        <CardTitle className="text-purple-700">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">{service.desc}</p>
      </CardContent>
     
    </Card>
  )
}