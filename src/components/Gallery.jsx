import React from "react";

const Gallery = () => {
  const galleryImages = [
    { id: 1, type: "Bed",       photo: "/images/beds.webp",
  title: "Comfortable Single Bed" },
    { id: 2, type: "Flore", title: "Premium flore ", photo: "/images/flore.webp",},
    { id: 3, type: "Building", title: "Luxury building Outsite Look" ,photo: "/images/building.webp",},
    { id: 4, type: "Hall", title: "Modern hall",photo: "/images/hall.webp", },
    // { id: 5, type: "Food", title: "Special food " ,photo: "/images/food5.jpg",},
    { id: 6, type: "Geyser", title: "Geyser For HOT WATER " ,photo: "/images/grijer.avif",},
    { id: 7, type: "Lift", title: "Lift for 5 flores",photo: "/images/lift.avif", },
    { id: 8, type: "Bed", title: "Three sharing room" ,photo: "/images/threebed.webp",},
    { id: 9, type: "Fidge", title: "fidge for water and fruits" ,photo: "/images/fidge.avif",},
     { id: 10, type: " Gym", title: "Regular gym improved physical health" ,photo: "/images/gym.jpg",},

  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our facilities through these images showcasing our comfortable
          beds, modern bathrooms, and spacious common areas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={image.photo}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs font-semibold mb-2">
                    {image.type}
                  </span>
                 <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
