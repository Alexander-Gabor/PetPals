import { createFileRoute } from "@tanstack/react-router";
import ProfilePage from "../pages/ProfilePage";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  return (
    <>
      <Navbar />
      <ProfilePage />
    </>
  );
}
