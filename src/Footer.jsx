const Footer = () => {
    return (
      <footer className="py-12 text-gray-900 bg-white">
        <div className="max-w-6xl px-6 mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/src/assets/logo.png" // Replace with the actual path to your logo
              alt="Katalist Limited Logo"
              className="mx-auto w-90"
            />
          </div>
  
          {/* Tagline */}
          <p className="mb-8 text-xl font-semibold ">
            "Have Already Figured It Out"
          </p>
  
          {/* Copyright */}
          <div className="text-sm">
            <p>© 2025 Katalist Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  