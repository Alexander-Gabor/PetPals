const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "PetPals made the adoption process so easy! We found the perfect dog, and they guided us every step of the way.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Fantastic experience! The team at PetPals is caring, and they made sure we were ready for our new feline friend.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Mark Johnson",
      rating: 5,
      comment: "The foster program is amazing. I love how they match pets with the perfect families. It's a life-changing experience.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];
  
  const Reviews = () => {
    return (
      <section className="max-w-7xl mx-auto py-20" id="reviews">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Reviews;
  