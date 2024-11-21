import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const CatAdoptionPage = () => {
  const [form, setForm] = useState({ name: "", email: "", catId: null });
  const [recommendedTraits, setRecommendedTraits] = useState({
    activityLevel: "",
    size: "",
    personality: "",
  });

  const path = "http://localhost:8080/";
  const {
    isLoading,
    error,
    data: cats = [],
  } = useQuery({
    queryKey: ["cats"],
    queryFn: async () =>
      fetch(path + "api/cats", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cats");
        }
        return response.json();
      }),
  });

  const handleQuizChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRecommendedTraits((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitQuiz = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const filteredCats = cats.filter((cat: any) => {
    return (
      (!recommendedTraits.activityLevel ||
        cat.activityLevel === recommendedTraits.activityLevel) &&
      (!recommendedTraits.size || cat.size === recommendedTraits.size) &&
      (!recommendedTraits.personality ||
        cat.personality === recommendedTraits.personality)
    );
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Interest Registered for Cat ID: ${form.catId}`);
  };

  if (isLoading) return <p>Loading cats...</p>;
  if (error) return <p>Error loading cats: {(error as Error).message}</p>;

  return (
    <section className="max-w-7xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Cats Available for Adoption
      </h2>

      {/* Cat Adoption Quiz */}
      <form onSubmit={handleSubmitQuiz} className="p-4 border rounded-lg mb-8">
        <h3 className="text-2xl font-medium mb-4">Find Your Perfect Cat</h3>

        <label className="block mb-4">
          Breed
          <select
            name="breed"
            className="block w-full p-2 border mt-1"
            value={recommendedTraits.activityLevel}
            onChange={handleQuizChange}
          >
            <option value="">Any</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>

        <label className="block mb-4">
          Size
          <select
            name="size"
            className="block w-full p-2 border mt-1"
            value={recommendedTraits.size}
            onChange={handleQuizChange}
          >
            <option value="">Any</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        <label className="block mb-4">
          Personality
          <select
            name="personality"
            className="block w-full p-2 border mt-1"
            value={recommendedTraits.personality}
            onChange={handleQuizChange}
          >
            <option value="">Any</option>
            <option value="playful">Playful</option>
            <option value="calm">Calm</option>
            <option value="affectionate">Affectionate</option>
          </select>
        </label>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Filter Cats
          </button>
        </div>
      </form>

      {/* Cats Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCats.map((cat: any) => (
          <div key={cat.id} className="p-4 border rounded-lg">
            <img
              src={`http://localhost:8080${cat.image}`}
              alt={cat.name}
              className="w-full h-60 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-medium">{cat.name}</h3>
            <p className="mt-2">{cat.description}</p>
            <p className="italic text-sm mt-1">Breed: {cat.breed}</p>
          </div>
        ))}
      </div>

      {/* Interest Form */}
      <form onSubmit={handleSubmitForm} className="mt-12 p-4 border rounded-lg">
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
          onChange={(e) => setForm({ ...form, catId: e.target.value })}
        >
          <option value="">Select a Cat</option>
          {filteredCats.map((cat: any) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
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

export default CatAdoptionPage;
