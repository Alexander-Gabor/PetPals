import { createFileRoute } from "@tanstack/react-router";
import CatAdoptionPage from "../pages/CatAdoptionPage";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/cat-adoption")({
  component: CatAdoption,
});

function CatAdoption() {
  return (
    <>
      <Navbar />
      <CatAdoptionPage />
    </>
  );
}
