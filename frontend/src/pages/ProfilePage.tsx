import { useUser } from "@clerk/clerk-react";
import { useBooking } from "../context/BookingContext";
import { FaHeart } from "react-icons/fa"; // Heart icon

const ProfilePage = () => {
  const { user } = useUser();
  const { bookings } = useBooking(); 

  if (!user) {
    return <p>Please sign in to view your profile.</p>;
  }

  return (
    <section className="max-w-4xl mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user.firstName || "User"}!
      </h1>
      <h2 className="text-xl font-semibold mb-2">Your Foster Bookings:</h2>
      {bookings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center border p-4 rounded shadow-md"
            >
              <div className="flex items-center mr-3">
                <FaHeart className="text-red-500" size={24} />
              </div>

              {/* Booking Details */}
              <div>
                <h3 className="font-bold text-lg">{booking.petName}</h3>
                <p className="italic">{booking.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="italic">No bookings yet. Start fostering today!</p>
      )}
    </section>
  );
};

export default ProfilePage;
