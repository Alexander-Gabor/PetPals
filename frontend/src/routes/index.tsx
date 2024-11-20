import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <main className="overflow-x-hidden antialiased text-neutral-800">
        <Navbar />
        <Hero />
        <Services />
      </main>
    </div>
  );
}
