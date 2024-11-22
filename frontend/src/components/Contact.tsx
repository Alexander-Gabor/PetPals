const Contact = () => {
  return (
    <footer style={{ backgroundColor: '#fed468' }} className="text-[#155263] py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Contact Info Section */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">Contact PetPals</h3>
            <p className="text-lg lg:text-xl mb-4">
              Get in touch with us for any inquiries or support.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col lg:flex-row gap-12 text-center lg:text-left">
            <div>
              <h4 className="text-lg font-medium mb-2">Phone</h4>
              <p className="text-lg">+1 (800) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Email</h4>
              <p className="text-lg">contact@petpals.com</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Address</h4>
              <p className="text-lg">123 PetPals Lane, Pet City, PC 12345</p>
            </div>
          </div>
        </div>

        {/* Footer Tag with Developer Info */}
        <div className="text-center mt-12 text-sm">
          <p className="text-[#155263]">
            Developed by <span className="font-bold text-[#155263]">Alexander Gabor</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
