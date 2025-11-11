import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Features() {
  const features = [
    { title: '24/7 Security', desc: 'CCTV cameras and security personnel', icon: '🔒' },
    { title: 'Housekeeping', desc: 'Daily cleaning and maintenance', icon: '🧹' },
    { title: 'Wi-Fi Access', desc: 'High-speed internet for study and entertainment', icon: '📶' },
    { title: 'Common Areas', desc: 'Spacious lounges and study zones', icon: '🏠' },
    { title: 'Lift', desc: ' 24/7 lift is available', icon: '🏋️‍♂️' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-hostel-primary">
          Facilities & Amenities
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-blue-100"
            >
              <CardHeader className="text-center">
                <span className="text-5xl">{feature.icon}</span>
                <CardTitle className="mt-4 text-hostel-secondary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
