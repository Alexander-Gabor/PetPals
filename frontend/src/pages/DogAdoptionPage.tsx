import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DogAdoptionQuiz from "../components/DogAdoptionQuiz";

const DogAdoptionPage = () => {
  const [form, setForm] = useState({ name: "", email: "", dogId: null });
  const [recommendedType, setRecommendedType] = useState("");
  const [recommendedBreeds, setRecommendedBreeds] = useState<string[]>([]);
  const [expandedDogId, setExpandedDogId] = useState<number | null>(null);

  const path = "http://localhost:8080/";
  const {
    isLoading,
    error,
    data: dogs = [],
  } = useQuery({
    queryKey: ["dogs"],
    queryFn: async () =>
      fetch(path + "api/dogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dogs");
        }
        return response.json();
      }),
  });

  const handleQuizComplete = (type: string, breeds: string[]) => {
    setRecommendedType(type);
    setRecommendedBreeds(breeds);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Interest Registered for ${form.name}`);
  };

  const filteredDogs = dogs.filter((dog: any) => {
    if (recommendedBreeds.length === 0) return true; // No filters, return all dogs
    return recommendedBreeds.includes(dog.breed); // Filter by recommended breeds
  });

  if (isLoading) return <p>Loading dogs...</p>;
  if (error) return <p>Error loading dogs: {(error as Error).message}</p>;

  const handleCardClick = (dogId: number, event: React.MouseEvent) => {
    // Prevent the card from collapsing if the form is clicked
    if (event.target instanceof HTMLFormElement) {
      return;
    }

    // If the clicked card is already expanded, collapse it; else expand it
    setExpandedDogId(expandedDogId === dogId ? null : dogId);
  };

  return (
    <section className="max-w-7xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Dogs Available for Adoption
      </h2>

      {/* Dog Adoption Quiz */}
      <DogAdoptionQuiz onQuizComplete={handleQuizComplete} />

      {recommendedType && (
        <div className="p-4 mb-8 border rounded-lg bg-green-50">
          <h3 className="text-xl font-bold mb-2">Recommended Dog Type:</h3>
          <p>{recommendedType}</p>
          <h4 className="text-lg font-medium mt-2">Example Breeds:</h4>
          <ul className="list-disc ml-6">
            {recommendedBreeds.map((breed, index) => (
              <li key={index}>{breed}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Dogs Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredDogs.map((dog: any) => (
          <div
            key={dog.id}
            className="relative p-4 border rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={(e) => handleCardClick(dog.id, e)} // Handle card expansion
          >
            <img
              src={`http://localhost:8080${dog.image}`}
              alt={dog.name}
              className="w-full h-60 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-medium">{dog.name}</h3>
            <p className="mt-2">{dog.description}</p>
            <p className="italic text-sm mt-1">Breed: {dog.breed}</p>

            {/* Dog card expansion (Overlay) */}
            {expandedDogId === dog.id && (
              <div className="absolute inset-0 bg-white bg-opacity-90 p-6 rounded-lg z-10">
                <h4 className="text-lg font-semibold mb-2">
                  Register Your Interest for {dog.name}
                </h4>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  // Prevent card collapse when form fields are clicked
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="block w-full mb-4 p-2 border"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="block w-full mb-4 p-2 border"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded mt-4"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DogAdoptionPage;
