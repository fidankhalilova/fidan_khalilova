"use client";
import { use } from "react";
import { SkillsType } from "@/api/skills/types";
import Banner from "@/sections/about/Banner";
import ImageSlide from "@/sections/about/ImageSlide";
import Skills from "@/sections/about/Skills";

interface AboutProps {
  skills: Promise<SkillsType[]>;
}

export default function AboutTemplate({ skills }: AboutProps) {
  const resolvedSkills = use(skills);
  return (
    <div className="flex flex-col justify-center py-16 overflow-x-hidden">
      <Banner />
      <ImageSlide />
      <Skills skills={resolvedSkills} />
    </div>
  );
}
