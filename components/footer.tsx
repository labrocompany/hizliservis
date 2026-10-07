import Link from "next/link";
import { WaLink } from "@/components/whatsapp-link";
import { nav, phoneDisplay, requestMessage, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold tracking-tight">{site.name}</p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Beyaz eşya, klima ve kombi için yerinde teknik servis. Servis kaydı
            yalnızca WhatsApp üzerinden alınır.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Sayfalar</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Hizmetler</p>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {service.menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">İletişim</p>
          <WaLink
            message={requestMessage}
            className="mt-3 block text-sm text-white/70 hover:text-white"
          >
            WhatsApp {phoneDisplay}
          </WaLink>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Haftanın her günü kayıt alınır. Randevu aynı gün planlanır.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs leading-5 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. Tüm hakları saklıdır.</p>
          <p>
            {site.name} bağımsız özel teknik servistir. Markaların yetkili
            servisi değildir.
          </p>
        </div>
      </div>
    </footer>
  );
}
