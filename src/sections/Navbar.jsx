import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      // close the mobile menu when switching to desktop
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between c-space">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-white/90 hover:text-white"
        >
          BrainsBalance
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:alirezasamadiard@gmial.com"
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/10"
          >
            Email
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:bg-white/5 hover:text-white sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <img
            src={open ? "assets/close.svg" : "assets/menu.svg"}
            className="h-5 w-5"
            alt=""
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden">
          <div className="mx-auto max-w-7xl c-space pb-4">
            <div className="mt-2 grid gap-1 rounded-xl border border-white/10 bg-white/5 p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:alirezasamadiard@gmial.com"
                onClick={handleNavClick}
                className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5"
              >
                Email
              </a>
              <a
                href="https://t.me/alirzsmdi"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
                className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5"
              >
                Telegram @alirzsmdi
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
