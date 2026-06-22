'use client';

import { useTheme } from '@/app/theme/useTheme';

export function ContactSidebar() {
  const { colors } = useTheme();

  return (
    <aside
      className="rounded-[8px] border p-6 shadow-sm"
      style={{
        borderColor: colors.sidebarBorder,
        backgroundColor: colors.sidebarBg,
        boxShadow: `0 1px 3px ${colors.sidebarBorder}`,
      }}
    >
      <h2 className="text-2xl font-semibold leading-tight" style={{ color: colors.sidebarText }}>
        Datos de atención
      </h2>
      <dl className="mt-6 grid gap-4">
        <div
          className="rounded-[8px] border p-4"
          style={{
            backgroundColor: colors.background,
            color: colors.sidebarText,
            borderColor: colors.sidebarBorder,
          }}
        >
          <dt className="font-semibold">Modalidad</dt>
          <dd className="mt-1">Presencial y en línea</dd>
        </div>
        <div
          className="rounded-[8px] border p-4"
          style={{
            backgroundColor: colors.background,
            color: colors.sidebarText,
            borderColor: colors.sidebarBorder,
          }}
        >
          <dt className="font-semibold">Ubicación</dt>
          <dd className="mt-1">San Andrés Cholula, Puebla</dd>
        </div>
        <div
          className="rounded-[8px] border p-4"
          style={{
            backgroundColor: colors.background,
            color: colors.sidebarText,
            borderColor: colors.sidebarBorder,
          }}
        >
          <dt className="font-semibold">WhatsApp</dt>
          <dd className="mt-1">222 203 1068</dd>
        </div>
      </dl>
      <div className="mt-6 border-t pt-5" style={{ borderColor: colors.sidebarBorder }}>
        <h2 className="text-lg font-semibold leading-tight" style={{ color: colors.sidebarText }}>
          Redes sociales
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/consultoriadih/"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/consultoriadih-org/"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </aside>
  );
}
