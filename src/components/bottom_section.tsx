'use client';

import { useEffect, useState } from "react";
import PostCardList from "@/components/PostCardList";
import PostView from "@/components/PostView";
import { Post } from "@/types/post";

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

    // Push a new state so the back button has something to pop
    if (typeof window !== "undefined" && window.history) {
      window.history.pushState({ view: 'post' }, '', `#${post.slug}`);
    }
  };

  const handleBack = () => {
    setMobileView('list');
    // Go back in history if we added a state before
    if (typeof window !== "undefined" && window.history) {
      window.history.back();
    }
  };

  useEffect(() => {
    const onPopState = (event: PopStateEvent) => {
      // On browser back, return to list view
      setMobileView('list');
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

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
          content={selectedPost.content}
          tags={selectedPost.tags}
          onBack={handleBack}
          visible={mobileView === 'post'}
        />
      )}
    </section>
  );
}
