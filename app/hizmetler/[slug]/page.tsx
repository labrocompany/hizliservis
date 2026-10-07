import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonPrimary, WaLink } from "@/components/whatsapp-link";
import { getService, serviceMessage, services } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Hizmet" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <article className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-16">
        <div>
          <p className="text-sm text-muted">
            <Link href="/hizmetler" className="hover:text-navy">
              Hizmetlerimiz
            </Link>
            <span className="px-2">/</span>
            <span>{service.menu}</span>
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{service.body}</p>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-line bg-line sm:aspect-video">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 720px, 100vw"
            />
          </div>
          <h2 className="mt-10 text-xl font-semibold text-navy">Sık görülen arızalar</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {service.issues.map((issue) => (
              <li key={issue} className="py-3 text-sm text-foreground">
                {issue}
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit border border-line bg-canvas p-5 lg:sticky lg:top-28">
          <h2 className="text-lg font-semibold text-navy">Servis kaydı</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            WhatsApp açılır. Marka, arıza ve adres satırlarını doldurmanız
            yeterlidir.
          </p>
          <WaLink
            message={serviceMessage(service.menu)}
            className={`inline-flex ${buttonPrimary} mt-5 w-full`}
          >
            WhatsApp&apos;tan yazın
          </WaLink>
          <p className="mt-4 text-xs leading-5 text-muted">
            İşlem öncesi tutar yazılır. Onayınız olmadan parça değişimi yapılmaz.
          </p>
        </aside>
      </div>
    </article>
  );
}
