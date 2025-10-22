import { useNavigate } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Linking Technologies
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-400">
                MoreLinks to connect
              </span>
            </h1>

            <p className="text-slate-300 max-w-2xl text-lg">
              We build reliable, fast and human-centered connections between
              people and opportunities. From infrastructure to delightful UX —
              we make technology feel like home.
            </p>

            <div className="flex gap-4 items-center">
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold px-5 py-3 rounded-lg shadow-lg hover:scale-105 transform transition"
              >
                Learn More
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="px-4 py-3 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700/50 transition"
              >
                Contact Us
              </button>
            </div>

            <div className="flex items-center gap-6 mt-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                <span>Real-time connections</span>
              </div>

              <div className="mt-4">
                <a
                  href="https://lodge.morelinks.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 ml-2 text-sm text-slate-300 hover:text-white transition"
                >
                  Discover Morelink Lodge
                  <FiExternalLink aria-hidden className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-indigo-400 animate-pulse" />
                <span>Reliable infrastructure</span>
              </div>
            </div>
          </div>

          {/* Right: Animated tech illustration */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md p-8 rounded-3xl bg-linear-to-br from-white/5 to-white/2 border border-white/6 shadow-2xl overflow-hidden">
              <div className="relative h-64 flex items-center justify-center">
                {/* Central node */}
                <div className="absolute flex items-center flex-col gap-2">
                  <div className="w-28 h-28 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 shadow-glow transform transition-all duration-700 scale-100 float-y" />
                  <div className="text-center text-slate-200 font-medium">
                    MoreLinks Core
                  </div>
                </div>

                {/* Satellite nodes */}
                <div className="absolute left-6 top-6 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/80 shadow-md float-y-slow" />
                  <div className="w-10 h-10 rounded-full bg-cyan-400/80 shadow-md" />
                </div>

                <div className="absolute right-6 bottom-6 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-violet-500/80 shadow-md float-y-slow" />
                  <div className="w-9 h-9 rounded-full bg-blue-400/80 shadow-md" />
                </div>

                {/* Decorative connecting lines (SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                      <stop
                        offset="100%"
                        stopColor="#6366f1"
                        stopOpacity="0.9"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50 50 C140 10, 260 10, 350 50"
                    stroke="url(#g1)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-draw"
                  />
                  <path
                    d="M50 150 C140 190, 260 190, 350 150"
                    stroke="url(#g1)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-draw delay-200"
                  />
                </svg>
              </div>
            </div>

            {/* subtle background tech dots */}
            <div className="pointer-events-none absolute -inset-8 blur-2xl opacity-30">
              <div className="absolute w-64 h-64 rounded-full bg-linear-to-br from-cyan-500 to-indigo-500 opacity-40 transform -translate-x-10 -translate-y-10 animate-blob" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
