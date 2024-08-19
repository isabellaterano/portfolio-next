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
    template: "%s | Isabella Terano",
    default: "Portfolio | Isabella Terano",
  },
  description:
    "Front-End Developer with expertise in React and UI/UX design, building user-friendly and responsive web experiences.",
  keywords: [
    "Front-End Developer",
    "React",
    "UI/UX Design",
    "Responsive Web Design",
    "Isabella Terano Portfolio",
    "Web Developer",
    "JavaScript Developer",
  ],
  openGraph: {
    title: "Portfolio | Isabella Terano",
    description:
      "Front-End Developer with expertise in React and UI/UX design, building user-friendly and responsive web experiences.",
    type: "website",
    locale: "en_US",
    url: "https://isabellaterano.vercel.app/en",
    siteName: "Isabella Terano Portfolio",
  },
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
        className={`${spaceGrotesk.className} antialiased bg-zinc-800 text-zinc-100 min-h-screen flex flex-col relative tracking-wide leading-loose m-0 p-0 box-border`}
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
