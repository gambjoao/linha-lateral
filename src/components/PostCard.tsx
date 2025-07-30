'use client';

import React from 'react';
import clsx from 'clsx';

interface PostCardProps {
  title: string;
  date: string;
  preview: string;
  selected: boolean;
  onClick: () => void;
}

export default function PostCard({ title, date, preview, selected, onClick }: PostCardProps) {
  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={clsx(
        'relative cursor-pointer border transition-all rounded-md aspect-[2/1] w-full overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] focus:outline-none',
        selected
          ? 'bg-gradient-to-r from-accent to-orange-600 text-white border-2 border-orange-600'
          : 'bg-white text-black border-gray-200 hover:border-gray-400'
      )}
    >
      <div className="flex flex-col h-full px-[18px] md:px-3 lg:px-[clamp(8px,1.2vw,18px)] pt-[30px] md:pt-4 lg:pt-[clamp(16px,2vw,30px)] pb-[16px] md:pb-3 lg:pb-[clamp(10px,1vw,16px)] justify-between flex-1">

        {/* Date stays at the top */}
        <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] md:text-xs lg:text-[clamp(0.6rem,0.7vw,0.75rem)] font-light">
          {date}
        </p>

        {/* Centered block with title + preview */}
        <div className="flex flex-col justify-center items-start flex-1">
          <h2 className="text-[clamp(1rem,1.6vw,1.3rem)] md:text-base md:line-clamp-2 lg:text-[clamp(0.9rem,1.3vw,1.3rem)] font-bold leading-tight mb-1">
            {title}
          </h2>
          <p className="text-[clamp(0.65rem,0.9vw,0.8rem)] line-clamp-2 md:text-xs md:hidden lg:text-[clamp(0.6rem,0.8vw,0.8rem)] lg:line-clamp-2">
            {preview}
          </p>
        </div>

        {/* Call to action pinned to bottom */}
        <div className="self-end text-[clamp(0.7rem,0.9vw,0.8rem)] md:text-xs lg:text-[clamp(0.65rem,0.8vw,0.8rem)] font-semibold italic text-right">
          <p className={clsx(selected ? 'text-white' : 'text-accent')}>
            Participe na discussão
          </p>
        </div>
      </div>

    </div>
  );
}