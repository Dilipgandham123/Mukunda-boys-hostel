import { Card, CardContent } from '@/components/ui/card'
import { Button } from '../ui/button'

export default function Map() {
  return (
    <Card className="h-64">
      <CardContent className="p-0 h-full">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          
          <div className="text-center">
            <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5696324096956!2d78.39598661500497!3d17.447940088046445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91d0f8a1c8b9%3A0x7b9f9c8d9b5d9c1e!2sPlot%20No%2027%2C%20Sri%20Laxmi%20Nilayam%2C%20Arunodhaya%20Colony%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1710200000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
            <p className="text-lg font-semibold">Map Location</p>
            <p className="text-sm text-gray-600">Embedded map would go here</p>
            <Button variant="outline" className="mt-4">Get Directions</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}