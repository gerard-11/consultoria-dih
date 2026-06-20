"use client";

import { useEffect, useId, useState } from "react";

const calendarLink = "https://calendar.app.google/ekuSLLvPNgWGGFhm8";

const buttonClasses = {
  primary:
    "inline-flex h-12 items-center justify-center rounded-full bg-key-pink px-6 text-base font-semibold text-background shadow-sm transition-colors hover:bg-key-yellow hover:text-footer-dark-blue",
  yellow:
    "inline-flex h-12 items-center justify-center rounded-full bg-key-yellow px-6 text-base font-semibold text-footer-dark-blue shadow-sm transition-colors hover:bg-disculparse",
};

type AppointmentButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof buttonClasses;
};

export function AppointmentButton({
  children,
  variant = "primary",
}: AppointmentButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={buttonClasses[variant]}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end bg-footer-dark-blue/75 p-3 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="mx-auto flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[8px] bg-background shadow-lg">
            <div className="flex items-center justify-between gap-4 border-b border-footer-blue/15 bg-surface px-4 py-3 sm:px-5">
              <div>
                <h2 id={titleId} className="text-lg font-semibold text-foreground">
                  Agenda tu cita
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Selecciona un horario disponible en el calendario.
                </p>
              </div>
              <button
                type="button"
                aria-label="Cerrar agenda"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-key-yellow text-xl font-semibold text-footer-dark-blue transition-colors hover:bg-key-pink hover:text-background"
              >
                ×
              </button>
            </div>

            <div className="h-[72vh] min-h-[34rem] bg-surface">
              <iframe
                title="Calendario para agendar cita con la Psicóloga Karla Figueroa"
                src={calendarLink}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-footer-blue/15 bg-surface px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-sm text-muted">
                Si el calendario no carga, abre la agenda directamente.
              </p>
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-key-yellow/70 bg-key-yellow px-5 text-sm font-semibold text-footer-dark-blue transition-colors hover:bg-key-pink hover:text-background"
              >
                Abrir agenda
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
