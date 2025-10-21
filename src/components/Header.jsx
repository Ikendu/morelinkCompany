import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FiMenu, FiX, FiHome, FiInfo, FiPhone, FiShield } from "react-icons/fi";
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
            <span
              className={`hidden md:inline font-semibold text-lg transition-opacity duration-300 ease-in-out ${
                scrolled ? "opacity-0 max-w-0 overflow-hidden" : "opacity-100"
              }`}
              aria-hidden={scrolled}
            >
              MoreLinks Tech
            </span>
          </button>
        </div>

        {/* center: nav (centered on desktop) */}
        <nav className="hidden md:flex justify-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-yellow-300 transition">
            <FiHome aria-hidden className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 text-white hover:text-yellow-300 transition">
            <FiInfo aria-hidden className="w-4 h-4" />
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2 text-white hover:text-yellow-300 transition">
            <FiPhone aria-hidden className="w-4 h-4" />
            <span>Contact</span>
          </Link>
          <Link to="/privacy-policy" className="flex items-center gap-2 text-white hover:text-yellow-300 transition">
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
        </div>

        {/* Mobile menu dropdown (always mounted to allow smooth slide animation) */}
        <div
          ref={menuRef}
          className={`absolute left-4 right-4 top-full mt-2 md:hidden z-50 transform origin-top transition-all duration-300 ease-in-out ${
            menuOpen
              ? "scale-y-100 opacity-100 pointer-events-auto"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-blue-700/95 rounded-lg shadow-lg">
            <div className="flex flex-col p-4 gap-2">
              <Link onClick={() => setMenuOpen(false)} to="/" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition">
                <FiHome aria-hidden className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link onClick={() => setMenuOpen(false)} to="/about" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition">
                <FiInfo aria-hidden className="w-4 h-4" />
                <span>About</span>
              </Link>
              <Link onClick={() => setMenuOpen(false)} to="/contact" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition">
                <FiPhone aria-hidden className="w-4 h-4" />
                <span>Contact</span>
              </Link>
              <Link onClick={() => setMenuOpen(false)} to="/privacy-policy" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-600 transition">
                <FiShield aria-hidden className="w-4 h-4" />
                <span>Privacy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
