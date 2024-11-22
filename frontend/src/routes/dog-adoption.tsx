import { createFileRoute } from "@tanstack/react-router";
import DogAdoptionPage from "../pages/DogAdoptionPage";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

export const Route = createFileRoute("/dog-adoption")({
  component: DogAdoption,
});

function DogAdoption() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
      <DogAdoptionPage />
      </main>
      <Contact />
    </>
  );
}
