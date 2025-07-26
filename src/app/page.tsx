// pages/index.tsx
import Head from "next/head";
import {MatchScoreList} from "@/components/MatchScoreList";
import Image from "next/image";
import { getAllPosts } from '@/lib/posts';
import BottomSection from "@/components/bottom_section";
import { Post } from '@/types/post';



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
    }));

    const lastMatches = [
    { homeTeam: "BEN", homeScore: 3, awayScore: 1, awayTeam: "SPO" },
    { homeTeam: "POR", homeScore: 1, awayScore: 0, awayTeam: "GUI" },
    { homeTeam: "BRA", homeScore: 0, awayScore: 0, awayTeam: "RAV" },
    { homeTeam: "BEN", homeScore: 3, awayScore: 1, awayTeam: "SPO" },
    { homeTeam: "CPI", homeScore: 0, awayScore: 1, awayTeam: "STC" },
    { homeTeam: "BEN", homeScore: 3, awayScore: 1, awayTeam: "SPO" },
    { homeTeam: "POR", homeScore: 1, awayScore: 0, awayTeam: "GUI" },
  ];

  return (
    <>
      <Head>
        <title>Linha Lateral</title>
      </Head>

      <main className="flex flex-col h-screen ">
        <div className="flex flex-col flex-1 overflow-hidden w-full px-6 sm:px-10 md:px-20 lg:px-[80px] pt-6 sm:pt-8 md:pt-10 lg:pt-10">
        {/* 🔝 Header Section */}
          <header className="flex flex-col w-full">
            {/* Top Logo Row */}
            <div className="flex items-center -mb-4 -mt-16 justify-start px-6 py-4">
              <Image
                src="/linha_lateral.jpg" 
                alt="Dribles Logo"
                width={200}
                height={200}
              />
            </div>
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
