import RoomCard from '@/components/rooms/RoomCard';

export default function RoomSection() {
  const rooms = [
    { id: 1, name: 'Twin Sharing', price: '₹12,000/month', image: '/images/twobeds.webp', features: ['Bathroom', 'Geyser', 'Bed', 'Locker'] },
    { id: 2, name: 'Triple Sharing', price: '₹9,000/month', image: '/images/threebed.webp', features: ['Bathroom', 'Geyser', 'Bed', 'Locker'] },
    { id: 3, name: 'Four Sharing', price: '₹7,500/month', image: '/images/beds.webp', features: ['Bathroom', 'Geyser', 'Bed', 'Locker'] },
    { id: 4, name: 'Five Sharing', price: '₹7,000/month', image: '/images/beds.webp', features: ['Bathroom', 'Geyser', 'Bed', 'Locker'] },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-hostel-primary">
          Our Rooms
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
