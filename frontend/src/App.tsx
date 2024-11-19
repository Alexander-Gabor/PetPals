import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const App = () => {
  return (
    <RouterProvider router={router}>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main className="overflow-x-hidden antialiased text-neutral-800">
        <Navbar />
        <Hero />
        <Services />
      </main>
    </RouterProvider>
  );
};

export default App;
