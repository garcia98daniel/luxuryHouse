import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/assets/imgs/logo.png",
  },
  title:
    "Remodelación de lujo en Santa Marta y Barranquilla | Diseño interior premium en Valledupar",

  description:
    "Especialistas en remodelación de lujo en Santa Marta, Barranquilla y Valledupar. Diseñamos y transformamos casas y apartamentos con acabados premium para aumentar el valor de tu propiedad.",

  keywords: [
    "remodelación de lujo Santa Marta",
    "remodelación Barranquilla",
    "remodelación Valledupar",
    "diseño interior Santa Marta",
    "diseño interior Barranquilla",
    "diseño interior Valledupar",
    "remodelación de apartamentos",
    "acabados de lujo Colombia",
  ],

  openGraph: {
    title:
      "Remodelación de lujo en Santa Marta, Barranquilla y Valledupar",
    description:
      "Transformamos espacios en experiencias premium con diseño interior y acabados de alto nivel en la costa Caribe.",
    url: "https://luxuryhousecol.com",
    siteName: "Luxury House Colombia",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
