"use client";

import Image from "next/image";
import logoImage from "@/public/brand/consultoria-dih-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappUrl } from "../seo";

const headerButtonClass =
  "inline-flex h-10 items-center justify-center rounded-2xl px-4 text-sm font-semibold text-primary transition-colors hover:bg-white/70";
const mobileHeaderButtonClass =
  "flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold text-primary transition-colors hover:bg-white/70";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-white/85 px-6 py-3 backdrop-blur-md sm:px-8">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={logoImage}
            alt="Consultoría DIH Psicóloga Karla Figueroa"
            width={116}
            height={60}
            priority
            className="h-12 w-auto md:h-14 lg:h-16"
          />
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  headerButtonClass,
                  active ? "bg-white/70" : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient inline-flex h-10 items-center justify-center rounded-2xl px-4 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Contacto
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="brand-gradient inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className={[
                "h-0.5 w-5 rounded-full bg-current transition-transform",
                isOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")} />
              <span className={[
                "h-0.5 w-5 rounded-full bg-current transition-opacity",
                isOpen ? "opacity-0" : "opacity-100",
              ].join(" ")} />
              <span className={[
                "h-0.5 w-5 rounded-full bg-current transition-transform",
                isOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")} />
            </span>
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 w-full max-w-7xl md:hidden">
          <div className="rounded-3xl border border-primary/10 bg-white/95 p-2 shadow-sm backdrop-blur-md">
            <div className="grid gap-1">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={[
                      mobileHeaderButtonClass,
                      active ? "bg-white/70" : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="brand-gradient mt-1 flex min-h-12 items-center justify-center rounded-2xl px-4 text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
