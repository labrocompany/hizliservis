import { buttonLight, WaLink } from "@/components/whatsapp-link";
import { requestMessage } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Cihazınız arızalandı mı?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
            WhatsApp&apos;tan yazın. Cihaz, marka ve adres yeterli. Uygun ekip
            aynı gün yönlendirilir.
          </p>
        </div>
        <WaLink message={requestMessage} className={`inline-flex ${buttonLight}`}>
          WhatsApp&apos;tan yazın
        </WaLink>
      </div>
    </section>
  );
}
