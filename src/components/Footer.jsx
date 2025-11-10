import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-sky-800 to-blue-700 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-sky-300">
              Mukunda Boys Hostel
            </h2>
            <p className="text-sm text-blue-200">
              Safe & Comfortable Accommodation
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-blue-200">
            <p>
              © {new Date().getFullYear()} Mukunda Boys Hostel. All rights
              reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://x.com/"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-sky-300" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-sky-300" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-sky-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
