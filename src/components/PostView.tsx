// components/PostView.tsx
import React from "react";
import Image from "next/image";

interface PostViewProps {
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  text: string;
  tags?: string[];
}

export default function PostView({ title, date, author, imageUrl, text, tags = [] }: PostViewProps) {
  return (
    <article className="flex flex-col max-w-3xl mx-auto space-y-6">
      {/* 🖼 Image */}
      <div className="w-full h-90 relative rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* 🏷 Tags + Date */}
      <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
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
      <h1 className="text-4xl font-bold">{title}</h1>

      {/* 📃 Text */}
      <div className="text-base leading-relaxed whitespace-pre-line text-gray-800">
        {text}
      </div>
    </article>
  );
}
