import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FiX } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">MoreLinks Tech</h3>
            <p className="text-slate-300 max-w-md">
              Connecting people and opportunities through reliable technology.
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <h4 className="font-semibold">Explore</h4>
            <Link to="/" className="text-slate-300 hover:text-white transition">
              Home
            </Link>
            <Link
              to="/about"
              className="text-slate-300 hover:text-white transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-300 hover:text-white transition"
            >
              Contact
            </Link>
            <Link
              to="/privacy-policy"
              className="text-slate-300 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-300 hover:text-white transition"
            >
              Terms
            </Link>
          </nav>

          <div className="space-y-3">
            <h4 className="font-semibold">Contact</h4>
            <div className="text-slate-300">+234 902 397 7057</div>
            <a
              href="mailto:services@morelinks.com.ng"
              className="text-slate-300 hover:text-white transition"
            >
              services@morelinks.com.ng
            </a>

            <div className="mt-3">
              <a
                href="https://lodge.morelinks.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white/6 hover:bg-white/10 rounded-md text-slate-200"
                aria-label="Discover Morelink Lodge (external)"
              >
                <span>Discover Morelink Lodge</span>
                <FiExternalLink aria-hidden className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition transform hover:-translate-y-1"
              >
                <FaFacebookF className="text-white w-4 h-4" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition transform hover:-translate-y-1"
              >
                <FiX className="text-white w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition transform hover:-translate-y-1"
              >
                <FaLinkedinIn className="text-white w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition transform hover:-translate-y-1"
              >
                <SiTiktok className="text-white w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition transform hover:-translate-y-1"
              >
                <FaInstagram className="text-white w-4 h-4" />
              </a>

              <a
                href="https://wa.me/2349023977057"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition transform hover:-translate-y-1"
              >
                <FaWhatsapp className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} MoreLinks Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
