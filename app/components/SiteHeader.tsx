"use client";

import Image from "next/image";
import logoImage from "@/public/brand/consultoria-dih-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappUrl } from "../seo";
import { ToggleTheme } from "./ToggleTheme";

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
    <header className="sticky top-0 z-40 border-b border-footer-blue/15 bg-background/95 px-5 py-3 backdrop-blur sm:px-8">
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

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "inline-flex h-10 items-center justify-center rounded-[8px] px-4 text-sm font-semibold transition-colors",
                  active
                    ? "bg-footer-blue text-background"
                    : "text-muted hover:bg-surface hover:text-footer-blue",
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
            className="inline-flex h-10 items-center justify-center rounded-[8px] bg-key-pink px-4 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-key-yellow hover:text-footer-dark-blue"
          >
            WhatsApp
          </a>
          <ToggleTheme />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ToggleTheme />
          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-footer-blue/25 bg-surface text-foreground shadow-sm transition-colors hover:border-footer-blue"
          >
            <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className={["h-0.5 w-5 rounded-full bg-current transition-transform", isOpen ? "translate-y-2 rotate-45" : ""].join(" ")} />
              <span className={["h-0.5 w-5 rounded-full bg-current transition-opacity", isOpen ? "opacity-0" : "opacity-100"].join(" ")} />
              <span className={["h-0.5 w-5 rounded-full bg-current transition-transform", isOpen ? "-translate-y-2 -rotate-45" : ""].join(" ")} />
            </span>
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 w-full max-w-7xl lg:hidden">
          <div className="rounded-[8px] border border-footer-blue/15 bg-surface p-2 shadow-sm">
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
                      "flex min-h-11 items-center rounded-[8px] px-4 text-base font-semibold transition-colors",
                      active
                        ? "bg-footer-blue text-background"
                        : "text-foreground hover:bg-background hover:text-footer-blue",
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
                className="mt-1 flex min-h-11 items-center justify-center rounded-[8px] bg-key-pink px-4 text-base font-semibold text-background transition-colors hover:bg-key-yellow hover:text-footer-dark-blue"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
