import aboutImage from "../assets/about-image.jpg";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 py-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20">
        About PetPals
      </h2>
      <div className="mx-4 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img
            src={aboutImage}
            alt="About PetPals"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Description Section */}
        <div className="lg:w-1/2 flex justify-center flex-col lg:pl-12">
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            At PetPals, we believe that every pet deserves a loving home. Our
            mission is to provide safe and caring environments for pets in need
            while helping them find their forever families. Join us today in
            making a difference!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
