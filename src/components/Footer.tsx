const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div id="about">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm text-white">
              D
            </span>
            Demo Project
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            A simple demo website with a header, hero section and footer. Customize it to fit
            your brand.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div id="contact">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Email: hello@example.com</li>
            <li>Phone: +1 (555) 000-0000</li>
            <li>Address: 123 Demo Street</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {year} Demo Project. All rights reserved.
      </div>
    </footer>
  );
}
