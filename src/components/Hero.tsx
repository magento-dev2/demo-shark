export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white dark:from-indigo-950/60 dark:via-zinc-950 dark:to-zinc-950"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="mb-6 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
          Welcome to Demo Project
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
          Build something <span className="text-indigo-600 dark:text-indigo-400">amazing</span> faster
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A clean, modern starting point for your next idea. Fast, responsive and ready to grow
          with your business.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors hover:bg-indigo-500"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="rounded-full border border-zinc-300 px-8 py-3 text-base font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
