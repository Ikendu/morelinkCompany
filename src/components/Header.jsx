import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiPhone,
  FiShield,
  FiExternalLink,
} from "react-icons/fi";
import logo from "../assets/icons/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (!menuOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    function handleKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur bg-blue-600/95 text-white shadow-md transition-all duration-300 ease-in-out ${
        scrolled ? "backdrop-saturate-150" : ""
      }`}
    >
      <div
        className={`container mx-auto grid grid-cols-3 items-center px-4 transition-all duration-300 ease-in-out ${
          scrolled ? "py-1" : "py-4"
        }`}
      >
        {/* left: logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer focus:outline-none"
            aria-label="Home"
          >
            <img
              src={logo}
              alt="MoreLinks Tech logo"
              className={`w-auto transition-all duration-300 ease-in-out ${
                scrolled ? "h-8" : "h-12"
              }`}
            />
          </button>
        </div>

        {/* center: nav (centered on desktop) */}
        <nav className="hidden md:flex justify-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
          >
            <FiHome aria-hidden className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
          >
            <FiInfo aria-hidden className="w-4 h-4" />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
          >
            <FiPhone aria-hidden className="w-4 h-4" />
            <span>Contact</span>
          </Link>
          <Link
            to="/privacy-policy"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
          >
            <FiShield aria-hidden className="w-4 h-4" />
            <span>Privacy</span>
          </Link>
        </nav>

        {/* right: mobile menu button */}
        <div className="flex justify-end items-center">
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
          {/* Desktop external CTA */}
          <a
            href="https://lodge.morelinks.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex group items-center gap-3 ml-4 bg-linear-to-r from-indigo-500 to-cyan-400 text-white px-4 py-2 rounded-full shadow-md hover:shadow-xl transform transition duration-300 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-300"
            aria-label="Discover Morelink Lodge (external)"
          >
            <span className="text-sm font-semibold">
              Discover Morelink Lodge
            </span>
            <FiExternalLink
              aria-hidden
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Mobile menu dropdown (always mounted to allow smooth slide animation) */}
        <div
          ref={menuRef}
          className={`absolute left-4 right-4 top-full mt-2 md:hidden z-50 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-96 opacity-100 translate-y-0 pointer-events-auto"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-blue-700/95 rounded-lg shadow-lg">
            <div className="flex flex-col p-4 gap-2">
              <Link
                onClick={() => setMenuOpen(false)}
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition transform duration-300 ${
                  menuOpen
                    ? "opacity-100 translate-y-0 delay-75"
                    : "opacity-0 -translate-y-1"
                }`}
              >
                <FiHome aria-hidden className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/about"
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition transform duration-300 ${
                  menuOpen
                    ? "opacity-100 translate-y-0 delay-150"
                    : "opacity-0 -translate-y-1"
                }`}
              >
                <FiInfo aria-hidden className="w-4 h-4" />
                <span>About</span>
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/contact"
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition transform duration-300 ${
                  menuOpen
                    ? "opacity-100 translate-y-0 delay-200"
                    : "opacity-0 -translate-y-1"
                }`}
              >
                <FiPhone aria-hidden className="w-4 h-4" />
                <span>Contact</span>
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/privacy-policy"
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition transform duration-300 ${
                  menuOpen
                    ? "opacity-100 translate-y-0 delay-250"
                    : "opacity-0 -translate-y-1"
                }`}
              >
                <FiShield aria-hidden className="w-4 h-4" />
                <span>Privacy</span>
              </Link>
              {/* external link in mobile menu */}
              <a
                href="https://lodge.morelinks.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition transform duration-300 ${
                  menuOpen
                    ? "opacity-100 translate-y-0 delay-300"
                    : "opacity-0 -translate-y-1"
                }`}
                onClick={() => setMenuOpen(false)}
                aria-label="Discover Morelink Lodge (external)"
              >
                <span>Discover Morelink Lodge</span>
                <FiExternalLink aria-hidden className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
