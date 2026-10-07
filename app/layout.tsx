import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppDock } from "@/components/whatsapp-dock";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Beyaz Eşya Teknik Servisi`,
    template: `%s | ${site.name}`,
  },
  description:
    "Bulaşık makinesi, çamaşır makinesi, buzdolabı, fırın, klima ve kombi için yerinde teknik servis. Servis kaydı WhatsApp üzerinden alınır.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppDock />
      </body>
    </html>
  );
}
