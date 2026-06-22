export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-20 border-t px-6 py-12 sm:px-8"
      style={{
        borderColor: 'var(--color-footer-border)',
        backgroundColor: 'var(--color-footer-bg)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-footer-text)' }}>
              Consultoría DIH
            </h3>
            <p className="mt-2 text-sm leading-6" style={{ color: `var(--color-footer-text)99` }}>
              Psicología profesional enfocada en tu bienestar emocional y mental.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--color-footer-text)' }}>
              Servicios
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/servicios"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: `var(--color-footer-text)99` }}
                >
                  Terapia Individual
                </a>
              </li>
              <li>
                <a
                  href="/servicios"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: `var(--color-footer-text)99` }}
                >
                  Terapia de Pareja
                </a>
              </li>
              <li>
                <a
                  href="/servicios"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: `var(--color-footer-text)99` }}
                >
                  Terapia Familiar
                </a>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--color-footer-text)' }}>
              Información
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/sobre-mi"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: `var(--color-footer-text)99` }}
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: `var(--color-footer-text)99` }}
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: `var(--color-footer-text)99` }}
                >
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--color-footer-text)' }}>
              Sígueme
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.instagram.com/consultoriadih/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-footer-text)' }}
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/consultoriadih-org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-footer-text)' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8" style={{ borderColor: 'var(--color-footer-border)' }}>
          <p className="text-center text-sm" style={{ color: `var(--color-footer-text)99` }}>
            © {currentYear} Consultoría DIH. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
