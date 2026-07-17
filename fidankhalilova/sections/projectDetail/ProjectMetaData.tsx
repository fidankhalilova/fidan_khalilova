"use client"
import { useState } from "react";
interface MetaDataProps {
    tags: string[];
    technologies: string[];
    likes: number;
    views: number;
}
export default function ProjectMetaData({tags, technologies, likes, views}: MetaDataProps) {
    const [showAllTags, setShowAllTags] = useState(false);
    const [showAllTech, setShowAllTech] = useState(false);
    const MOBILE_LIMIT = 4;
    const visibleTags = showAllTags
        ? tags
        : tags.slice(0, MOBILE_LIMIT);
      const visibleTech = showAllTech
        ? technologies
        : technologies.slice(0, MOBILE_LIMIT);
    return (
      <div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Tags:</h4>
          <div className="grid grid-cols-5 gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
            {visibleTags.map((tag) => (
              <div
                key={tag}
                className="bg-[#AC6891] text-white py-1 px-1 sm:px-3 text-center sm:text-left text-xs sm:text-sm rounded truncate"
                title={tag}
              >
                {tag}
              </div>
            ))}
          </div>

          {tags.length > MOBILE_LIMIT && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="block sm:hidden mt-2 text-xs font-semibold text-[#AC6891] hover:underline"
            >
              {showAllTags
                ? "Show Less"
                : `+ Load More (${tags.length - MOBILE_LIMIT} more)`}
            </button>
          )}
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Technologies used:</h4>

          <div className="grid grid-cols-5 gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
            {visibleTech.map((tech) => (
              <div
                key={tech}
                className="bg-[#AC6891] text-white py-1 px-1 sm:px-3 text-center sm:text-left text-xs sm:text-sm rounded truncate"
                title={tech}
              >
                {tech}
              </div>
            ))}
          </div>

          {technologies.length > MOBILE_LIMIT && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="block sm:hidden mt-2 text-xs font-semibold text-[#AC6891] hover:underline"
            >
              {showAllTech
                ? "Show Less"
                : `+ Load More (${technologies.length - MOBILE_LIMIT} more)`}
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-lg mb-1">Likes: </h4>
          <p className="mb-0">{likes}</p>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-lg mb-1">Views: </h4>
          <p className="mb-0">{views}</p>
        </div>
      </div>
    );
}