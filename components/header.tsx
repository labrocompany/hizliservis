"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buttonPrimary, WaLink } from "@/components/whatsapp-link";
import { nav, phoneDisplay, requestMessage, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-xs sm:text-sm">
          <p>Haftanın her günü yerinde servis</p>
          <WaLink message={requestMessage} className="font-medium">
            WhatsApp {phoneDisplay}
          </WaLink>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center bg-navy text-xs font-semibold tracking-wide text-white">
            AS
          </span>
          <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-navy">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm ${
                isActive(pathname, item.href)
                  ? "font-semibold text-navy"
                  : "text-muted hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WaLink
            message={requestMessage}
            className={`${buttonPrimary} hidden sm:inline-flex`}
          >
            Servis kaydı oluştur
          </WaLink>
          <button
            type="button"
            className="border border-line px-3 py-2 text-sm text-navy lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            Menü
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-line px-5 py-3 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3 text-sm ${
                    isActive(pathname, item.href)
                      ? "font-semibold text-navy"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
