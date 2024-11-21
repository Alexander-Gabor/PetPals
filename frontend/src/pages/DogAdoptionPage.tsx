import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DogAdoptionQuiz from "../components/DogAdoptionQuiz";

const DogAdoptionPage = () => {
  const [form, setForm] = useState({ name: "", email: "", dogId: null });
  const [recommendedType, setRecommendedType] = useState("");
  const [recommendedBreeds, setRecommendedBreeds] = useState<string[]>([]);

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
    alert(`Interest Registered for Dog ID: ${form.dogId}`);
  };

  const filteredDogs = recommendedBreeds.length
    ? dogs.filter((dog: any) => recommendedBreeds.includes(dog.breed))
    : dogs;

  if (isLoading) return <p>Loading dogs...</p>;
  if (error) return <p>Error loading dogs: {(error as Error).message}</p>;

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
          <div key={dog.id} className="p-4 border rounded-lg">
            <img
              src={`http://localhost:8080${dog.image}`}
              alt={dog.name}
              className="w-full h-60 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-medium">{dog.name}</h3>
            <p className="mt-2">{dog.description}</p>
            <p className="italic text-sm mt-1">Breed: {dog.breed}</p>
          </div>
        ))}
      </div>

      {/* Interest Form */}
      <form onSubmit={handleSubmit} className="mt-12 p-4 border rounded-lg">
        <h3 className="text-2xl font-medium mb-4">Register Your Interest</h3>
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
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <select
          className="block w-full mb-4 p-2 border"
          onChange={(e) => setForm({ ...form, dogId: e.target.value })}
        >
          <option value="">Select a Dog</option>
          {filteredDogs.map((dog: any) => (
            <option key={dog.id} value={dog.id}>
              {dog.name}
            </option>
          ))}
        </select>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default DogAdoptionPage;
