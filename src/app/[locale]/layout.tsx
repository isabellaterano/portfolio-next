import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/app/[locale]/_components/navbar";
import Footer from "@/app/[locale]/_components/footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | Isabella",
    default: "Portfolio | Isabella",
  },
  description:
    "Front-End Developer with expertise in React and UI/UX design, building user-friendly and responsive web experiences.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <body
        className={`${spaceGrotesk.className} antialiased bg-slate-950 text-slate-100 min-h-screen flex flex-col relative tracking-wide leading-loose`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <div className="flex flex-col flex-grow">
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
          <Toaster position="bottom-right" reverseOrder={false} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
