import { socialLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="mt-2 w-full ">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <h2 className="bg-gradient-to-r from-primary-500 via-accent-400 to-accent-500 bg-clip-text font-serif text-4xl text-transparent">
            i am small R
          </h2>
          <p className="bg-gradient-to-r from-neutral-600 to-neutral-500 bg-clip-text text-xl text-transparent">
            謝謝你看到了最後{" "}
            <span className="text-accent-500 transition-colors duration-300 hover:text-primary-500">
              ♥
            </span>
          </p>

          <div className="flex items-center gap-8">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={item.ariaLabel}
                >
                  <div className="relative flex size-10 items-center justify-center rounded-full bg-white/50 p-2 backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-white">
                    <Icon
                      className={`size-5 transition-transform duration-200 ease-in-out group-hover:rotate-3 group-hover:scale-110 ${item.className}`}
                      aria-hidden="true"
                    />
                  </div>
                </a>
              );
            })}
          </div>

          <p className="bg-gradient-to-r from-neutral-600 to-neutral-500 bg-clip-text text-sm text-transparent">
            © {new Date().getFullYear()} small R
          </p>
        </div>
      </div>
    </footer>
  );
}
