import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "@/layout/Sidebar";

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
