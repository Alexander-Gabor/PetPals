import { useState } from "react";
import { Link } from "@tanstack/react-router"; // Import Link from your router
import logo from "../assets/logo.png";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants";
import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        {/* Logo */}
        <div className="pl-2">
          <Link to="/"> {/* Use Link for client-side navigation */}
            <img src={logo} width={150} height={15} alt="PetFinder" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex gap-x-8 pr-2 items-center">
          {LINKS.map((link, index) => (
            <Link
              key={index}
              to={link.link} // Use Link's "to" prop instead of "href"
              className="uppercase text-sm font-medium hover:text-blue-500 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Profile Link */}
          {isSignedIn && (
            <Link
              to="/profile"
              className="uppercase text-sm font-medium hover:text-blue-500 transition"
            >
              Profile
            </Link>
          )}

          {/* Clerk User/Sign-In */}
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}
      >
        {LINKS.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide hover:text-blue-500 transition"
          >
            {link.name}
          </Link>
        ))}

        {/* Profile Link for Mobile */}
        {isSignedIn && (
          <Link
            to="/profile"
            className="uppercase text-lg font-medium block py-2 tracking-wide hover:text-blue-500 transition"
          >
            Profile
          </Link>
        )}

        {/* Clerk User/Sign-In for Mobile */}
        <div className="mt-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
