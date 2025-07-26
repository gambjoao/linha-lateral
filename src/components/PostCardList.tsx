'use client';

import { useState } from 'react';
import PostCard from './PostCard';

interface Post {
  title: string;
  date: string;
  preview: string;
  slug: string;
}

interface PostCardListProps {
  posts: Post[];
  onSelect: (post: Post) => void;
  visible: boolean;
}

export default function PostCardList({ posts, onSelect, visible }: PostCardListProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  return (
    <aside
      className={`
        p-4 space-y-4 overflow-y-auto no-scrollbar 
        ${visible ? 'block' : 'hidden'} 
        w-full md:block md:w-1/4
      `}
    >
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          date={post.date}
          preview={post.preview}
          selected={selectedSlug === post.slug}
          onClick={() => {
            setSelectedSlug(post.slug);
            onSelect(post);
          }}
        />
      ))}
    </aside>
  );
}
