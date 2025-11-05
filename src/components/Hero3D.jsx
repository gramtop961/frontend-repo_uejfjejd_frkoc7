import Spline from "@splinetool/react-spline";

export default function Hero3D() {
  return (
    <section id="hero" className="relative min-h-[80vh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5r3Wk9O6G8vWl6Nn/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Live 3D Experience
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
          Build, ship, and showcase with style
        </h1>
        <p className="mt-3 max-w-xl text-gray-600">
          A sleek starter with an interactive 3D scene, crisp typography, and a minimalist look.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#projects" className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-900">
            View Projects
          </a>
          <a href="#contact" className="rounded-md border border-black/10 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
