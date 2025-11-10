import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import RoomCard from '@/components/rooms/RoomCard'

export default function RoomSection() {
  const rooms = [
    { 
      id: 1, 
      name: "Four  Sharing", 
      price: "₹8000/month", 

      capacity: "1 person", 
      image: "/images/beds.webp",
      features: [" bathroom",  "geyser ", "Beds", "TV","Locker"]
    },
    { 
      id: 2, 
      name: "Triple Sharing", 
      price: "₹9000/month", 
      capacity: "1 person", 
      image: "/images/threebed.webp",
      features: [" bathroom",  "geyser ", "Beds", "TV","Locker"]
    },
    { 
      id: 3, 
      name: "Twin Sharing", 
      price: "₹12000/month", 
      capacity: "1 person", 
      image: "/images/twobeds.webp",
      features: [" bathroom",  "geyser ", "Beds", "TV","Locker"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Our Rooms
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, i) => (
          <RoomCard key={room.id} room={room} index={i} />
        ))}
      </div>
    </div>
  )
}