import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';
import {
  Autoplay, Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const imagesOne = [
  "/images/imageOne.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
];

const imagesTwo = [
  "/images/image5.png",
  "/images/image6.png",
  "/images/image7.png",
  "/images/image8.png",
];

export default function ImageSlide() {
    return (
      <div className="flex flex-col gap-10 justify-center py-8 px-4 sm:px-0">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:gap-4">
          <div className="order-2 lg:order-0 lg:col-span-2">
            <h2 className="text-3xl text-[#AC6891] mb-3 font-bold">
              Introduction
            </h2>
            <p className="text-xl">
              Hi, I'm Fidan Khalilova, a Frontend Developer and Information
              Technologies student at ADA University with a passion for creating
              modern, user-centered digital experiences. I enjoy transforming
              ideas into responsive, interactive, and visually engaging
              applications that combine clean design with practical
              functionality. Over the past few years, I've worked on a variety
              of projects ranging from business websites and dashboards to
              AI-powered educational platforms and smart city concepts. These
              experiences have strengthened my skills in React, Next.js,
              Tailwind CSS, JavaScript, and UI/UX design while teaching me the
              value of collaboration, problem-solving, and continuous learning.
            </p>
          </div>

          <div className="order-1 lg:order-0 overflow-hidden rounded-3xl">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {imagesOne.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-100 bg-[#AC6891] flex justify-center items-center overflow-hidden rounded-3xl">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw" 
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <div className="order-3 lg:order-0">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {imagesTwo.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-100 bg-[#AC6891] flex justify-center items-center overflow-hidden rounded-3xl">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="order-4 lg:order-0 lg:col-span-2">
            <h2 className="text-3xl text-[#AC6891] mb-3 font-bold">
              Interests
            </h2>
            <p className="text-xl">
              I'm particularly interested in building products that make
              technology more accessible and meaningful for users. Whether it's
              improving an existing interface, developing new features, or
              exploring how artificial intelligence can enhance user
              experiences, I enjoy finding creative solutions to real-world
              challenges. Beyond coding, I actively participate in hackathons,
              innovation programs, and team projects where I can learn from
              others and push myself outside my comfort zone. I'm always looking
              for opportunities to grow as a developer, contribute to impactful
              products, and explore emerging technologies at the intersection of
              web development and AI. When I'm not coding, you'll usually find
              me learning new technologies, refining my design skills, or
              working on personal projects that help me become a better
              developer every day.
            </p>
          </div>
        </div>
      </div>
    );
}