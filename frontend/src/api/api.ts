import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export type Cat = {
  id: number;
  name: string;
  breed: string;
  description: string;
  image: string;
};

export type Dog = {
  id: number;
  name: string;
  breed: string;
  description: string;
  image: string;
};

export const fetchCats = async (): Promise<Cat[]> => {
  const { data } = await api.get<Cat[]>("/api/cats");
  return data;
};

export const fetchDogs = async () => {
  try {
    const response = await api.get<Dog[]>("http://localhost:8080/dogs");
    console.log("API Response:", response); // Log the full response
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch dogs");
    }
    return response.data; // Assuming response.data is the array of dogs
  } catch (error) {
    console.error("Error fetching dogs:", error);
    return []; // Return an empty array if there is an error
  }
};
