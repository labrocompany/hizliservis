import type { Metadata } from "next";
import { buttonPrimary, WaLink } from "@/components/whatsapp-link";
import { phoneDisplay, requestMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "HızlıServis servis kaydı WhatsApp üzerinden alınır. Cihaz, marka, arıza ve adres yazmanız yeterlidir.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-sm text-muted">İletişim</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">
            Servis kaydı WhatsApp üzerinden
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Form yok, çağrı merkezi yok. Mesajda cihaz türünü, markayı, arızayı
            ve ilçeyi yazın. Uygun saat size aynı yazışmadan döner.
          </p>
          <dl className="mt-8 border-y border-line">
            <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[140px_1fr]">
              <dt className="text-sm text-muted">WhatsApp</dt>
              <dd>
                <WaLink
                  message={requestMessage}
                  className="text-sm font-semibold text-navy hover:text-accent"
                >
                  {phoneDisplay}
                </WaLink>
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[140px_1fr]">
              <dt className="text-sm text-muted">Kayıt saati</dt>
              <dd className="text-sm text-foreground">
                Haftanın her günü. Randevu aynı gün planlanır.
              </dd>
            </div>
          </dl>
        </div>
        <div className="border border-line bg-canvas p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-navy">Mesajda şunlar yeterli</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {["Cihaz türü", "Marka ve model", "Kısaca arıza", "İlçe ve adres"].map(
              (item) => (
                <li key={item} className="py-3 text-sm">
                  {item}
                </li>
              )
            )}
          </ul>
          <WaLink
            message={requestMessage}
            className={`inline-flex ${buttonPrimary} mt-6 w-full sm:w-auto`}
          >
            WhatsApp&apos;tan yazın
          </WaLink>
        </div>
      </div>
    </section>
  );
}
