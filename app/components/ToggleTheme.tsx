"use client";

import { useTheme } from "./ThemeProvider";

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const knobClassName = [
    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-background shadow-sm transition-transform",
    isDark ? "translate-x-10 bg-key-yellow" : "translate-x-0 bg-footer-blue",
  ].join(" ");

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Cambiar tema"
      onClick={toggleTheme}
      className="inline-flex h-10 w-20 cursor-pointer items-center rounded-full border border-footer-blue/25 bg-surface p-1 shadow-sm transition-colors hover:border-footer-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-footer-blue"
    >
      <span className={knobClassName}>{isDark ? "D" : "L"}</span>
    </button>
  );
}
