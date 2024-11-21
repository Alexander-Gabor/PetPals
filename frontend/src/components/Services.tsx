import { SERVICES_CONTENT } from "../constants";
import { Link } from "@tanstack/react-router";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20">
          Our Services
        </h2>
        {SERVICES_CONTENT.map((service, index) => (
          <div
            key={index}
            className="mb-12 mx-4 flex flex-col lg:flex-row items-center"
          >
            {/* Image Section */}
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Card Section */}
            <div
              className={`lg:w-1/2 flex justify-center flex-col ${
                index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
              }`}
            >
              <Link
                to={
                  service.title === "Dog Adoption"
                    ? "/dog-adoption"
                    : service.title === "Cat Adoption"
                      ? "/cat-adoption"
                      : service.title === "Pet Foster Program"
                        ? "/pet-foster-page"
                        : "#"
                }
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition hover:scale-105"
              >
                <h3 className="text-xl lg:text-2xl font-medium mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9 text-gray-700">
                  {service.description}
                </p>
                <span className="text-blue-500 underline text-lg">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
