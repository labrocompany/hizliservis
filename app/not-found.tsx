import Link from "next/link";
import { buttonSecondary } from "@/components/whatsapp-link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-navy">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 text-sm text-muted">
        Aradığınız sayfa yok. Hizmetlere dönüp WhatsApp kaydı açabilirsiniz.
      </p>
      <Link href="/" className={`inline-flex ${buttonSecondary} mt-6`}>
        Anasayfa
      </Link>
    </section>
  );
}
