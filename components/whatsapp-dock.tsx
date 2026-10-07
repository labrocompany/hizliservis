import { requestMessage } from "@/lib/site";
import { WaLink, WhatsAppIcon } from "@/components/whatsapp-link";

export function WhatsAppDock() {
  return (
    <>
      <WaLink
        message={requestMessage}
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-whatsapp px-4 py-3.5 text-sm font-semibold text-white md:hidden"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp&apos;tan servis talebi oluştur
      </WaLink>
      <WaLink
        message={requestMessage}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-lg md:inline-flex"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </WaLink>
    </>
  );
}
