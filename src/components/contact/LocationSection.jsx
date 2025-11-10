import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function LocationSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Our Location
      </h1>
      <div className="gap-8 items-center">
        <div className="w-full ">
          <Card className="border-purple-200 overflow-hidden py-0">
            <CardContent className="p-0 h-112">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.285218756284!2d78.38721997516626!3d17.4460575834512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91895b8adf0b%3A0xa4036160f4a5bf22!2sKoushik%20Reddy%20Womens%20Hostel!5e0!3m2!1sen!2sin!4v1753525220889!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </CardContent>
          </Card>
        </div>
        <div className="w-full mt-10">
          <Card className="border-purple-200 text-center">
            <CardHeader>
              <CardTitle className="text-purple-700">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-center">
                <div>
                  <h3 className="font-semibold text-purple-600">
                    Mukunda Boys Hostel
                  </h3>
                  <p>Jaihind Enclave, </p>
                  <p>Madhapur, Hyderabad,</p>
                  <p>Telangana,India, 500081</p>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-600">
                    Office Hours
                  </h3>
                  <p>Monday - Sunday: 9AM - 8PM</p>
                </div>
             
                
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
