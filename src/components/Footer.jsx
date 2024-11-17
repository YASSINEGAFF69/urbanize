import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 border-t border-neutral-300">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">VirtualR</h2>
            <p className="text-sm text-neutral-600">
              Empowering developers worldwide.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Features
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-green-500 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-green-500 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-green-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} VirtualR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
