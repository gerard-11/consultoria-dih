"use client";

import { useEffect, useId, useState } from "react";

const calendarLink = "https://calendar.app.google/ekuSLLvPNgWGGFhm8";

const buttonClasses = {
  primary:
    "brand-gradient inline-flex h-12 items-center justify-center rounded-full px-6 text-sm sm:text-base font-semibold text-white shadow-md shadow-primary/15 transition-opacity hover:opacity-90",
  yellow:
    "brand-gradient inline-flex h-12 items-center justify-center rounded-full px-6 text-sm sm:text-base font-semibold text-white shadow-md shadow-primary/15 transition-opacity hover:opacity-90",
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
          className="fixed inset-0 z-50 flex bg-primary/75 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="mx-auto flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-white shadow-lg sm:h-[92vh] sm:rounded-3xl">
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-primary/10 bg-white px-4 py-3 sm:px-5">
              <div>
                <h2 id={titleId} className="text-lg font-semibold text-primary">
                  Agenda tu cita
                </h2>
                <p className="mt-1 text-sm text-primary/70">
                  Selecciona un horario disponible en el calendario.
                </p>
              </div>
              <button
                type="button"
                aria-label="Cerrar agenda"
                onClick={() => setIsOpen(false)}
                className="brand-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                ×
              </button>
            </div>

            <div className="min-h-0 flex-1 bg-white">
              <iframe
                title="Calendario para agendar cita con la Psicóloga Karla Figueroa"
                src={calendarLink}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex shrink-0 flex-col gap-3 border-t border-primary/10 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-sm text-primary/70">
                Si el calendario no carga, abre la agenda directamente.
              </p>
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-gradient inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
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
