import { useState } from "react";
import { MOCK_DOGS } from "../constants/mockDogs";

const DogAdoptionPage = () => {
  const [dogs] = useState(MOCK_DOGS);
  const [form, setForm] = useState({ name: "", email: "", dogId: null });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Interest Registered for Dog ID: ${form.dogId}`);
  };

  return (
    <section className="max-w-7xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-8">Dogs Available for Adoption</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dogs.map((dog) => (
          <div key={dog.id} className="p-4 border rounded-lg">
            <img src={dog.image} alt={dog.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-medium">{dog.name}</h3>
            <p className="mt-2">{dog.description}</p>
          </div>
        ))}
      </div>
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
          {dogs.map((dog) => (
            <option key={dog.id} value={dog.id}>
              {dog.name}
            </option>
          ))}
        </select>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

export default DogAdoptionPage;
