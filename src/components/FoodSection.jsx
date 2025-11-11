import FoodCard from '@/components/FoodCard';

export default function FoodSection() {
  const meals = [
    { id: 1, name: 'Breakfast', time: '7:30 AM - 10:00 AM', description: 'Puri, Upma, Idli, Poha, and more', image: '/images/foodone.jpg' },
    { id: 2, name: 'Lunch', time: '12:30 PM - 2:30 PM', description: 'Rice, curry, dal, sambar, buttermilk', image: '/images/food2.jpg' },
    { id: 3, name: 'Dinner', time: '7:30 PM - 9:30 PM', description: 'Chapathi, curry, rice, curd, chutney', image: '/images/food6.jpg' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-hostel-primary">Food & Dining</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <FoodCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
