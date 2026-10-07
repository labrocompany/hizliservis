import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white">
      <Link
        href={`/hizmetler/${service.slug}`}
        aria-label={service.title}
        className="relative aspect-[4/3] overflow-hidden bg-line"
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight text-navy">
          <Link href={`/hizmetler/${service.slug}`} className="hover:text-accent">
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.summary}</p>
        <Link
          href={`/hizmetler/${service.slug}`}
          className="mt-4 text-sm font-semibold text-navy hover:text-accent"
        >
          Detaylı bilgi
        </Link>
      </div>
    </article>
  );
}
