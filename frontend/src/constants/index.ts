import hero from "../assets/hero.jpg"
import dogImage from "../assets/dogImage.jpg"
import catImage from "../assets/catImage.jpg"
import smallAnimalImage from "../assets/smallAnimalImage.jpg"
import fosterImage from "../assets/fosterImage.jpg"
import seniorPetImage from "../assets/seniorPetImage.jpg"

export const LINKS = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Reviews",
      link: "#reviews",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  export const HERO_CONTENT = {
    title: "PetFinder",
    subtitle: "Get yourself a floofy floof",
    image: hero,
  };

  export const SERVICES_CONTENT = [
    {
      title: "Dog Adoption",
      description:
        "Find your perfect canine companion through our dog adoption service. We match families with loving, loyal dogs of all breeds, ages, and sizes, ensuring they find a forever home.",
      image: dogImage,
      alt: "Dog Adoption",
    },
    {
      title: "Cat Adoption",
      description:
        "Adopt a friendly feline and bring joy into your home. Our cat adoption service helps match you with cats of all personalities, from playful kittens to calm adult cats.",
      image: catImage,
      alt: "Cat Adoption",
    },
    {
      title: "Small Animal Adoption",
      description:
        "Looking for a small pet? Our small animal adoption service offers rabbits, hamsters, guinea pigs, and more, all ready to find loving homes.",
      image: smallAnimalImage,
      alt: "Small Animal Adoption",
    },
    {
      title: "Pet Foster Program",
      description:
        "Join our pet foster program and provide a temporary home for animals in need. Help care for pets while they await adoption and become part of their journey to a forever home.",
      image: fosterImage,
      alt: "Pet Foster Program",
    },
    {
      title: "Senior Pet Adoption",
      description:
        "Give an older pet a loving home through our senior pet adoption program. Our team ensures senior pets find families who will provide the care and attention they deserve in their golden years.",
      image: seniorPetImage,
      alt: "Senior Pet Adoption",
    }
  ];
  