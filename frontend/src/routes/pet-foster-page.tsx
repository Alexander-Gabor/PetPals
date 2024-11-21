import PetFosterPage from "../pages/PetFosterPage";
import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/pet-foster-page")({
  component: PetFoster,
});

function PetFoster() {
  return (
    <>
      <Navbar />
      <PetFosterPage />
    </>
  );
}
