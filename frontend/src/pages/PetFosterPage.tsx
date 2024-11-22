import { useState } from "react";
import { useBooking } from "../context/BookingContext";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker"; // Import the calendar component
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css"; // Calendar CSS

const mockPets = [
  {
    id: 1,
    name: "Luna",
    image: "http://localhost:8080/images/cats/luna.jpg",
    availableDates: ["2024-11-25", "2024-11-27", "2024-11-30"],
  },
  {
    id: 2,
    name: "Bella",
    image: "http://localhost:8080/images/dogs/bella.jpg",
    availableDates: ["2024-11-25", "2024-11-29"],
  },
  {
    id: 3,
    name: "Charlie",
    image: "http://localhost:8080/images/dogs/charlie.jpg",
    availableDates: ["2024-11-28", "2024-12-01"],
  },
];

const PetFosterPage = () => {
  const { addBooking } = useBooking();
  const [selectedDate, setSelectedDate] = useState<unknown>(null);
  const [availablePets, setAvailablePets] = useState<unknown[]>([]);
  const [selectedPet, setSelectedPet] = useState<unknown>(null);

  const formatDate = (date: any) => {
    if (!date) return null;
    return `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`;
  };

  const handleDateSelection = (date: any) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);

    const filteredPets = mockPets.filter((pet) =>
      pet.availableDates.includes(formattedDate)
    );
    setAvailablePets(filteredPets);

    setSelectedPet(null);
  };

  const handleBooking = () => {
    if (!selectedPet) {
      alert("Please select a pet to proceed with booking.");
      return;
    }

    const formattedDate = formatDate(selectedDate);

    addBooking({
      id: Date.now(), // Generate a unique ID for the booking
      petName: selectedPet.name,
      date: formattedDate,
    });

    alert(`Booking confirmed for ${selectedPet.name} on ${formattedDate}`);
  };

  return (
    <section className="max-w-7xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Pet Foster Program
      </h2>
      <p className="text-center mb-12">
        Choose a date on the calendar to see pets available for fostering and
        book them.
      </p>

      {/* Calendar and Available Pets Section */}
      <div className="flex flex-col md:flex-row items-start md:items-start gap-8">
        {/* Calendar */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-medium mb-4">Select a Date</h3>
          <Calendar
            value={selectedDate}
            onChange={handleDateSelection}
            shouldHighlightWeekends
            customDaysClassName={mockPets.flatMap((pet) =>
              pet.availableDates.map((date) => ({
                date: new Date(date),
                className: "bg-green-300 text-black rounded",
              }))
            )}
          />
        </div>

        {/* Available Pets for Selected Date */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-medium mb-4">
            {selectedDate
              ? `Available Pets on ${formatDate(selectedDate)}`
              : "Select a Date to See Available Pets"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availablePets.length > 0 ? (
              availablePets.map((pet) => (
                <div
                  key={pet.id}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedPet?.id === pet.id ? "bg-blue-100" : ""
                  }`}
                  onClick={() => setSelectedPet(pet)}
                >
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <h4 className="text-lg font-medium">{pet.name}</h4>
                </div>
              ))
            ) : (
              <p className="italic">No pets available on this date.</p>
            )}
          </div>
        </div>
      </div>

      {/* Booking Button */}
      <div className="mt-8 flex justify-center">
        <button
          className={`px-6 py-2 rounded text-white ${
            selectedPet
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedPet}
          onClick={handleBooking}
        >
          {selectedPet ? `Book ${selectedPet.name}` : "Select a Pet to Book"}
        </button>
      </div>
    </section>
  );
};

export default PetFosterPage;
