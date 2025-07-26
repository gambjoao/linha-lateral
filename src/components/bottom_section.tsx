'use client';

import { useState } from "react";
import PostCardList from "@/components/PostCardList";
import PostView from "@/components/PostView";

interface Post {
  title: string;
  date: string;
  author: string;
  text: string;
  preview: string;
  imageUrl: string;
  tags: string[];
  slug: string;
  content: string;
}

interface BottomSectionProps {
  posts: Post[];
}

export default function BottomSection({ posts }: BottomSectionProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(posts[0] ?? null);
  const [mobileView, setMobileView] = useState<'list' | 'post'>('list');

  const handleSelect = (post: Post) => {
    const fullPost = posts.find((p) => p.slug === post.slug);
    setSelectedPost(fullPost ?? null);
    setMobileView('post');
  };

  const handleBack = () => {
    setMobileView('list');
  };

  return (
    <section className="flex flex-1 min-h-0 overflow-hidden w-full">
      <PostCardList
        posts={posts.map((post) => ({
          ...post,
          preview: post.content,
        }))}
        onSelect={handleSelect}
        visible={mobileView === 'list'}
      />

      {selectedPost && (
        <PostView
          title={selectedPost.title}
          date={selectedPost.date}
          author={selectedPost.author}
          imageUrl={selectedPost.imageUrl}
          text={selectedPost.content}
          tags={selectedPost.tags}
          onBack={handleBack}
          visible={mobileView === 'post'}
        />
      )}
    </section>
  );
}
