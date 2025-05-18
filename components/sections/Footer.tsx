"use client";
import { socialLinks } from "@/constants";


export default function Footer() {


  return (
    <footer
  
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center gap-6">
       

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
                  <div className="relative flex size-10 items-center justify-center rounded-full bg-black/40 p-2 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20">
                    <Icon
                      className={`size-5 ${item.className}`}
                      aria-hidden="true"
                    />
                  </div>
                </a>
              );
            })}
          </div>

          <p className="bg-gradient-to-r from-neutral-300 to-neutral-400 bg-clip-text text-sm text-transparent">
            © {new Date().getFullYear()} MapleML's Web  <span className="text-accent-600 transition-colors duration-300 ">
              ♥
            </span>
          </p>
          <p className="bg-gradient-to-r from-neutral-300 to-neutral-400 bg-clip-text text-sm text-transparent">
           fork from small R
          </p>
        </div>
      </div>
    </footer>
  );
}
