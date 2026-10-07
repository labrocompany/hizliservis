import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { principles, site, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name}, beyaz eşya, klima ve kombi arızalarında yerinde teknik servis verir. Servis kaydı WhatsApp üzerinden alınır.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm text-muted">Hakkımızda</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">
              Yerinde bakan, işlemi önceden yazan servis
            </h1>
            <p className="mt-5 text-base leading-7 text-muted">
              {site.name}, beyaz eşya, klima ve kombi arızalarında adrese gelen
              özel teknik servistir. Kayıt yalnızca WhatsApp üzerinden alınır.
              Cihaz türü, marka, arıza ve ilçe yazmanız randevu için yeterlidir.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Teknisyen gelmeden sürpriz ücret konuşulmaz. İnceleme sonrası
              tutar size iletilir. Onayınız olmayan parça değişmez. Bitmiş iş
              için işçilik garantisi verilir.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-line bg-line">
            <Image
              src="/images/hizliservis-gorusme.jpg"
              alt="Teknisyen müşteriyle mutfakta cihazı konuşuyor"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-navy">
          Çalışma biçimi
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="border border-line bg-white p-5">
              <p className="text-sm font-semibold text-accent">{step.n}</p>
              <h3 className="mt-2 font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <li key={item.title} className="border-t border-navy pt-4">
              <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
