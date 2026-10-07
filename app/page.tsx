import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { ServiceCard } from "@/components/service-card";
import { buttonPrimary, buttonSecondary, WaLink } from "@/components/whatsapp-link";
import { principles, requestMessage, services, steps } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="text-sm font-semibold text-accent">
              Beyaz eşya teknik servisi
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl sm:leading-tight">
              En yakın servis ekibi, bir WhatsApp mesajı kadar yakın
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              Bulaşık makinesi, çamaşır makinesi, buzdolabı, fırın, klima ve
              kombi arızalarında yerinde bakıyoruz. Kaydı WhatsApp&apos;tan
              oluşturun, uygun teknisyen adresinize gelsin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WaLink message={requestMessage} className={`inline-flex ${buttonPrimary}`}>
                Servis talebi oluştur
              </WaLink>
              <Link href="/hizmetler" className={`inline-flex ${buttonSecondary}`}>
                Hizmetleri incele
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              İşlem öncesi fiyat bilgisi. Onayınız olmadan parça değişimi yok.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden border border-line bg-line">
            <Image
              src="/images/hizliservis-hero.jpg"
              alt="Teknisyen mutfakta bulaşık makinesine bakıyor"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6">
          <p className="text-sm font-semibold text-navy">Hizmet verilen cihazlar</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="text-sm text-muted hover:text-navy"
                >
                  {service.menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy">
              Hangi cihazınızı tamir edelim?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Tüm marka ve modellerde yerinde servis. Arçelik, Beko, Bosch,
              Siemens, Samsung, LG, Vestel, Profilo ve diğer markalar.
            </p>
          </div>
          <Link href="/hizmetler" className="text-sm font-semibold text-navy hover:text-accent">
            Tüm hizmetler
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-navy">
            Nasıl çalışır?
          </h2>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="border-t border-navy pt-4">
                <p className="text-sm font-semibold text-accent">{step.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden border border-line bg-line">
          <Image
            src="/images/hizliservis-gorusme.jpg"
            alt="Teknisyen ev sahibiyle buzdolabının yanında konuşuyor"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">
            İşlem başlamadan ne yapılacağı belli olur
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Teknisyen cihazı yerinde inceler, arızayı ve tutarı size yazar.
            Parça değişecekse önce onayınız alınır. İş bitince işçilik
            garantisi düzenlenir.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {principles.map((item) => (
              <li key={item.title}>
                <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
