"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

export default function RoomCard({ room, index }) {
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="h-48 overflow-hidden">
        <Image 
          src={room.image} 
          alt={room.name} 
          width={400} 
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">{room.name}</h3>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">{room.capacity}</span>
          <span className="font-bold text-pink-600">{room.price}</span>
          

          
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-purple-700">Features:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {room.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  )
}