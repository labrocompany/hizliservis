import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Bulaşık makinesi, çamaşır makinesi, buzdolabı, fırın, klima, kombi, televizyon, kurutma makinesi ve derin dondurucu servisi.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-sm text-muted">Hizmetlerimiz</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-navy">
            Hangi cihazınızı tamir edelim?
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Her cihaz için yerinde servis verilir. İlgili sayfadan WhatsApp
            kaydı açın; mesajda marka, arıza ve ilçe hazır gelir, siz
            doldurursunuz.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
