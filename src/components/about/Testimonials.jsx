import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Testimonials() {
 const testimonials = [
  {
    name: " jansi",
    role: "Student",
    text: "The hostel has been my second home. The security and cleanliness are excellent!",
    image: "https://picsum.photos/seed/getika/50/50.jpg"
  },
  {
    name: "Anjali Patel",
    role: "Professional",
    text: "Great facilities and very supportive staff. Highly recommended!",
    image: "https://picsum.photos/seed/anjalipatel/50/50.jpg"
  },
  {
    name: "Meera Reddy",
    role: "Student",
    text: "The food is amazing and the environment is very welcoming.",
    image: "https://picsum.photos/seed/renuka/50/50.jpg"
  },
  {
    name: "Sneha",
    role: "Student",
    text: "It was everything I needed and wanted from a hostel and very new, clean and homely.",
    image: "https://picsum.photos/seed/sruthi/50/50.jpg"
  },
  {
    name: "Sruthi Patel",
    role: "Professional",
    text: "The rooms were clean and well-maintained, providing a comfortable stay.",
    image: "https://picsum.photos/seed/sruthipatel/50/50.jpg"
  },
  {
    name: "Lavanya ",
    role: "Student",
    text: "I had an excellent experience with Hostel.",
    image: "https://picsum.photos/seed/lavanyareddy/50/50.jpg"
  },
  {
    name: "Sangitha Sharma",
    role: "Student",
    text: "Considered a good option for women, with praise for timely food and water facilities.",
    image: "https://picsum.photos/seed/sangithasharma/50/50.jpg"
  },
  {
    name: "Anjali Patel",
    role: "Professional", 
    text: "Known for its homely food, good weather, and overall good maintenance.",
    image: "https://picsum.photos/seed/hushitha/50/50.jpg"
  },
  {
    name: "Lalitha",
    role: "Student",
    text: "highlight the hostel's strengths and weaknesses, focusing on aspects like cleanliness, location",
    image: "https://picsum.photos/seed/sai2/50/50.jpg"
  }
];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">What Our Residents Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="hover-scale animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <CardTitle className="text-purple-700">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}