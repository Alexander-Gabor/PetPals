import { createFileRoute } from "@tanstack/react-router";
import CatAdoptionPage from "../pages/CatAdoptionPage";

export const Route = createFileRoute("/cat-adoption")({
  component: CatAdoption,
});

function CatAdoption() {
  return (
    <>
      <CatAdoptionPage />
    </>
  );
}
