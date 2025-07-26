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
      <div className="flex flex-col h-full px-[18px] pt-[30px] pb-[16px] justify-between flex-1">
        {/* Top Section (Date + Title + Preview) */}
        <div className="flex flex-col">
          <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] font-light">{date}</p>
          <div className="mt-[6px] flex flex-col flex-grow">
            <h2 className="text-[clamp(1rem,1.6vw,1.3rem)] font-bold leading-tight mb-1">{title}</h2>
            <p className="text-[clamp(0.65rem,0.9vw,0.8rem)] line-clamp-2 flex-grow">{preview}</p>
          </div>
        </div>

        {/* Bottom-right Action Text */}
        <div className="self-end text-[clamp(0.7rem,0.9vw,0.8rem)] font-semibold italic text-right">
          <p className={clsx(selected ? 'text-white' : 'text-accent')}>
            Participe na discussão
          </p>
        </div>
      </div>
    </div>
  );
}
