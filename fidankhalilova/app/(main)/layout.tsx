import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import RootLayout from "@/layout/RootLayout";

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fidan Khalilova",
  description: "Portfolio of Fidan Khalilova, a software engineer and web developer.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
