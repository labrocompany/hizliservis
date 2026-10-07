import { whatsappHref } from "@/lib/site";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 20.5 3.5zM12 20.3a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3zm4.6-6.2c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.8 6.8 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.4.2-.4a.5.5 0 0 0 0-.4c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.4 11.4 0 0 0 4.4 3.9 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.1-.4-.2z"
      />
    </svg>
  );
}

export function WaLink({
  message,
  className,
  children,
}: {
  message: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export const buttonPrimary =
  "items-center justify-center bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent";

export const buttonSecondary =
  "items-center justify-center border border-navy bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-canvas";

export const buttonLight =
  "items-center justify-center bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-canvas";
