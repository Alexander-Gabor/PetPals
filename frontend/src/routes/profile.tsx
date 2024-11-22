import { createFileRoute } from "@tanstack/react-router";
import ProfilePage from "../pages/ProfilePage";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProfilePage />
      </main>
      ´ <Contact />
    </div>
  );
}
