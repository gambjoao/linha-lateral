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
          ? 'bg-gradient-to-r from-accent to-orange-500 text-white border-2 border-orange-600'
          : 'bg-white text-black border-gray-200 hover:border-gray-400'
      )}
    >
      <div className="flex flex-col h-full px-[18px] pt-[30px] pb-[16px] justify-between">
        {/* Top Section (Date + Title + Preview) */}
        <div className="flex flex-col">
          <p className="text-sm font-light">{date}</p>
          <div className="mt-[8px]">
            <h2 className="text-2xl font-bold leading-tight mb-2">{title}</h2>
            <p className="text-xs line-clamp-2">{preview}</p>
          </div>
        </div>

        {/* Bottom-right Action Text */}
        <p
          className={clsx(
            'absolute bottom-[12px] right-[18px] text-sm font-semibold italic text-right',
            selected ? 'text-white' : 'text-accent'
          )}
        >
          Participe na discussão
        </p>
      </div>
    </div>
  );
}
