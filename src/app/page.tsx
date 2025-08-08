// pages/index.tsx
import Head from "next/head";
import {MatchScoreList} from "@/components/MatchScoreList";
import { getAllPosts } from '@/lib/posts';
import BottomSection from "@/components/bottom_section";
import { Post } from '@/types/post';
import MainLogo from "@/components/MainLogo";



export default function Home() {

    const posts: Post[] = getAllPosts().map((post) => ({
      title: post.title,
      date: post.date,
      author: post.author,
      imageUrl: post.imageUrl,
      preview: post.content,
      content: post.content,
      slug: post.slug,
      tags: post.tags,
    })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); ;

    const lastMatches = [
    { homeTeam: "CPI", homeScore: 0, awayScore: 2, awayTeam: "SPO" },
    { homeTeam: "NIC", homeScore: 0, awayScore: 2, awayTeam: "BEN" },  
  ];

  return (
    <>
      <Head>
        <title>Linha Lateral</title>
      </Head>

      <main className="flex flex-col h-screen ">
        <div className="flex flex-col flex-1 overflow-hidden w-full px-6 sm:px-10 md:px-12 lg:px-[80px] pt-6 sm:pt-8 md:pt-10 lg:pt-10">
        {/* 🔝 Header Section */}
          <header className="flex flex-col w-full">
            {/* Top Logo Row */}
            <MainLogo />
            {/* Match Scores + Club Icons Row */}
            <div className="flex w-full px-6 pb-4">
              {/* 🟧 Left: Match Scores */}
              <div className="w-1/1 mb-4 flex items-center">
                <MatchScoreList matches={lastMatches} />
              </div>

              {/* 🔵 Right: Club Icons */}

            </div>
          </header>
          <BottomSection posts={posts} />

        </div>
      </main>
    </>
  );
}
