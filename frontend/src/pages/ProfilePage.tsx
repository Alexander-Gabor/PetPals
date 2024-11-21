import { useUser } from "@clerk/clerk-react";
import { useBooking } from "../context/BookingContext";

const ProfilePage = () => {
  const { user } = useUser();
  const { bookings } = useBooking(); // Use `useBooking` to access `bookings`

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
            <div key={booking.id} className="border p-4 rounded">
              <h3 className="font-bold text-lg">{booking.petName}</h3>
              <p className="italic">{booking.date}</p>
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
