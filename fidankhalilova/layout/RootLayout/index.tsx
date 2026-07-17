import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }: { children: React.ReactNode}) {
    return (
      <div className="flex flex-col min-h-screen bg-[#FFF5FB]">
        <div className="mx-auto container mt-auto">
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    );
}