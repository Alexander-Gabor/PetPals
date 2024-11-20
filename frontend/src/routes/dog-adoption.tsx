import { createFileRoute } from "@tanstack/react-router";
import DogAdoptionPage from "../pages/DogAdoptionPage";

export const Route = createFileRoute("/dog-adoption")({
  component: DogAdoption,
});

function DogAdoption() {
  return (
    <>
      <DogAdoptionPage />
    </>
  );
}
