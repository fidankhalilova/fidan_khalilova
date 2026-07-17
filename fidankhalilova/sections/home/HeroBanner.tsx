import Button from "@/components/shared/Button";
import Header from "@/components/shared/Text/Header";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="w-full max-w-7xl px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <div className="mb-4">
            <Header text="Hi, I'm Fidan Khalilova" color="#AC6891" />
          </div>

          <p className="text-lg mb-6 max-w-lg">
            I am a passionate developer with experience in building web
            applications. I specialize in creating responsive and user-friendly
            interfaces using modern web technologies using React, Next.js, and
            Tailwind CSS (also backend using Node.js/Express). I am always eager
            to learn new technologies and improve my skills.
          </p>
          <div>
            <Link href="/projects">
              <Button text="View Projects" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/filtered-hero-img.png"
            alt="Hero Image"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
