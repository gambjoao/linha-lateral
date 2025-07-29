'use client';

import React from "react";
import Image from "next/image";

interface PostViewProps {
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  content: string;
  tags?: string[];
  onBack?: () => void;
  visible?: boolean;
}

export default function PostView({
  title,
  date,
  author,
  imageUrl,
  content,
  tags = [],
  onBack,
  visible = true,
}: PostViewProps) {
  return (
    <article
      className={`
        flex-1 p-4 overflow-y-auto no-scrollbar
        ${visible ? 'block' : 'hidden'}
        w-full md:block
      `}
    >
      {/* Back Button for mobile */}
      {onBack && (
        <button
          onClick={onBack}
          className="mb-4 text-sm font-bold text-primary-text hover:underline md:hidden"
        >
          ← Voltar
        </button>
      )}

      {/* 🖼 Image */}
      <div className="w-full h-48 md:h-100 relative rounded-lg overflow-hidden mb-2">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* 🏷 Tags + Date */}
      <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-6">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="italic">{date} — por {author}</div>
      </div>

      {/* 📝 Title */}
      <h1 className="text-5xl md:text-6xl  font-bold mb-10">{title}</h1>

      {/* 📃 Text */}
      <div className="text-base text-justify leading-relaxed whitespace-pre-line md:mr-18">
        {content}
      </div>
    </article>
  );
}
