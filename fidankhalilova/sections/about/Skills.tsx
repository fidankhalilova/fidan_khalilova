"use client"
import SkillsIcon from "@/components/shared/SkillsIcon";
import Subheader from "@/components/shared/Text/Subheader";

interface SkillsProps {
    title: string;
    rating: number;
    iconName: string;
}

export default function Skills({ skills }: {skills: SkillsProps[]} ) {
    const MAX_RATING = 10;
    
    return (
      <div>
        <div className="px-4 sm:px-0">
          <Subheader text="Skills and technologies" color="#AC6891" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 sm:py-12 px-4 sm:px-0">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="flex items-center gap-3 p-2 sm:p-4 border rounded-xl shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div className="text-3xl text-[#AC6891]">
                <SkillsIcon name={skill.iconName} className="w-8 h-8" />
              </div>

              <div className="relative w-full">
                <div>
                  <h4 className="font-semibold line-clamp-1">{skill.title}</h4>
                  <p className="text-xs text-gray-500">
                    {skill.rating}/{MAX_RATING}
                  </p>
                </div>
                <div>
                  <progress
                    value={skill.rating}
                    max={MAX_RATING}
                    className="w-full h-2 rounded overflow-hidden appearance-none bg-gray-200 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-[#AC6891] [&::-moz-progress-bar]:bg-[#AC6891]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}