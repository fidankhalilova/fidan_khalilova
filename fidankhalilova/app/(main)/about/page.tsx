import { fetchSkills } from "@/api/skills";
import AboutTemplate from "@/templates/AboutTemplate";

export default async function AboutPage() {
  const skillsData = fetchSkills();
  return <AboutTemplate skills={skillsData} />;
}