"use client";

import { useTheme } from "./ThemeProvider";

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const knobClassName = [
    "flex h-8 w-8 items-center justify-center rounded-full text-background shadow-sm transition-transform",
    isDark ? "translate-x-10 bg-key-yellow" : "translate-x-0 bg-footer-blue",
  ].join(" ");

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      onClick={toggleTheme}
      className="inline-flex h-10 w-20 cursor-pointer items-center rounded-full border border-footer-blue/25 bg-surface p-1 shadow-sm transition-colors hover:border-footer-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-footer-blue"
    >
      <span className={knobClassName}>{isDark ? <MoonIcon /> : <SunIcon />}</span>
    </button>
  );
}
