import Header from "@/components/shared/Text/Header";
import Subheader from "@/components/shared/Text/Subheader";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactCards() {
    return (
      <div className="w-full h-140 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full mt-8 sm:mt-10 px-4 sm:px-0">
          <div className="w-full bg-[#AC6891] rounded-3xl h-full p-8 flex flex-col justify-between">
            <div className="pb-6 sm:border-b border-white/20 border-0">
              <Header text="Get in touch!" color="white" />
              <p className="text-white/80 text-sm mt-2 font-light">
                Feel free to reach out for collaborations or just a friendly
                chat.
              </p>
            </div>

            <div className="flex flex-col gap-4 my-auto">
              <Link
                href="https://www.linkedin.com/in/fidan-khalilova/"
                target="_blank"
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#AC6891] hover:scale-[1.02] hover:shadow-md">
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    <FaLinkedin />
                  </div>
                  <h2 className="text-xl font-semibold tracking-wide">
                    Linkedin
                  </h2>
                </div>
              </Link>

              <Link
                href="https://github.com/fidankhalilova"
                target="_blank"
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#AC6891] hover:scale-[1.02] hover:shadow-md">
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    <FaGithub />
                  </div>
                  <h2 className="text-xl font-semibold tracking-wide">
                    Github
                  </h2>
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/thefidankhalilova/"
                target="_blank"
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#AC6891] hover:scale-[1.02] hover:shadow-md">
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    <FaInstagram />
                  </div>
                  <h2 className="text-xl font-semibold tracking-wide">
                    Instagram
                  </h2>
                </div>
              </Link>

              <Link
                href="mailto:fidankhalilova295@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#AC6891] hover:scale-[1.02] hover:shadow-md">
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    <MdMail />
                  </div>
                  <h2 className="text-xl font-semibold tracking-wide">Email</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="mb-10 sm:mb-0">
            <ContactForm />
          </div>
        </div>
      </div>
    );
}