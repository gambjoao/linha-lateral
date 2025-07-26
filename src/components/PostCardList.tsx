'use client';

import { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { Post } from '@/types/post';

interface PostCardListProps {
  posts: Post[];
  onSelect: (post: Post) => void;
  visible: boolean;
}

export default function PostCardList({ posts, onSelect, visible }: PostCardListProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  // Select the first post on initial mount
  useEffect(() => {
    if (posts.length > 0 && selectedSlug === null) {
      setSelectedSlug(posts[0].slug);
      onSelect(posts[0]);
    }
  }, [posts, selectedSlug, onSelect]);

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
