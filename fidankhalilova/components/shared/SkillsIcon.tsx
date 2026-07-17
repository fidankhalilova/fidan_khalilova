import React from 'react'
import { 
  DiReact, 
  DiJavascript1, 
  DiHtml5, 
  DiCss3, 
  DiGit, 
  DiPython 
} from "react-icons/di";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss 
} from "react-icons/si";
import { 
  MdPeople, 
  MdChat, 
  MdLoop, 
  MdQueryStats,
  MdAccessTime,
  MdLightbulb
} from "react-icons/md";

interface SkillsIconProps {
    name: string;
    className: string;
}

export default function SkillsIcon({ name, className}: SkillsIconProps) {
    const iconMap: Record<
      string,
      React.ComponentType<{ className: string }>
    > = {
      DiReact,
      DiJavascript1,
      DiHtml5,
      DiCss3,
      DiGit,
      DiPython,
      SiNextdotjs,
      SiTypescript,
      SiNodedotjs,
      SiTailwindcss,
      MdPeople,
      MdChat,
      MdLoop,  
      MdQueryStats,
      MdAccessTime,
      MdLightbulb,
    };
    const IconComponent = iconMap[name];
    if (!IconComponent) {
      return <span className="text-gray-400">❓</span>;
    }
    return <IconComponent className={className} />;
}