import Banner from "@/sections/contact-us/Banner";
import ContactCards from "@/sections/contact-us/ContactCards";

export default function ContactTemplate() {
    return (
      <div className="flex flex-col justify-center py-16 overflow-x-hidden">
        <Banner />
        <ContactCards />

      </div>
    );
}