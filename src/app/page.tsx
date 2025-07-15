// pages/index.tsx
'use client';

import Head from "next/head";
import PostCard from "@/components/PostCard";
import PostView from "@/components/PostView";
import {MatchScoreList} from "@/components/MatchScoreList";
import Image from "next/image";

export default function Home() {
    const lastMatches = [
    { homeTeam: "BEN", homeScore: 3, awayScore: 1, awayTeam: "SPO" },
    { homeTeam: "POR", homeScore: 1, awayScore: 0, awayTeam: "GUI" },
    { homeTeam: "BRA", homeScore: 0, awayScore: 0, awayTeam: "RAV" },
    { homeTeam: "BEN", homeScore: 3, awayScore: 1, awayTeam: "SPO" },
    { homeTeam: "CPI", homeScore: 0, awayScore: 1, awayTeam: "STC" },
  ];

  return (
    <>
      <Head>
        <title>Dribles</title>
      </Head>

      <main className="flex flex-col h-screen ">
        <div className="flex flex-col flex-1 overflow-hidden w-full px-6 sm:px-10 md:px-20 lg:px-[80px] pt-6 sm:pt-8 md:pt-10 lg:pt-10">
        {/* 🔝 Header Section */}
          <header className="flex flex-col w-full">
            {/* Top Logo Row */}
            <div className="flex items-center justify-start px-6 py-4">
              <Image
                src="/football.png" 
                alt="Dribles Logo"
                width={84}
                height={84}
                className="mr-4"
              />
              <h1 className="text-4xl font-bold italic text-6xl">
                Dribles
              </h1>
            </div>
            {/* Match Scores + Club Icons Row */}
            <div className="flex w-full px-6 pb-4">
              {/* 🟧 Left: Match Scores */}
              <div className="w-2/3 flex items-center">
                <MatchScoreList matches={lastMatches} />
              </div>

              {/* 🔵 Right: Club Icons */}
              <div className="w-1/3 flex items-center justify-end gap-4">
                <Image src="/b_scp.png" alt="SCP Logo" width={120} height={87} />
                <Image src="/b_slb.png" alt="SLB Logo" width={120} height={87} />
                <Image src="/b_fcp.png" alt="FCP Logo" width={120} height={87} />
              </div>
            </div>
          </header>
          {/* 🔻 Bottom Area */}
          <section className="flex flex-1 min-h-0 overflow-hidden">
            {/* 📋 Post List (Left) */}
            <aside className="w-1/4 p-4 space-y-4 overflow-y-auto no-scrollbar">
              <PostCard
                date="11 Julho 2025"
                title="Benfica garante Dedic por 15M Lateral chega na Quinta-Feira"
                preview="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
                selected={true}
                onClick={() => console.log("Clicked!")}
              />
              <PostCard
                date="10 Julho 2025"
                title="Sporting vende Gyokeres ao Arsenal por 63M€"
                preview="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
                selected={false}
                onClick={() => console.log("Clicked 2!")}
              />
                        <PostCard
                date="10 Julho 2025"
                title="Desafio noturno"
                preview="O jogo começou às 22h e foi até de madrugada..."
                selected={false}
                onClick={() => console.log("Clicked 2!")}
              />
              <PostCard
                date="10 Julho 2025"
                title="Desafio noturno"
                preview="O jogo começou às 22h e foi até de madrugada..."
                selected={false}
                onClick={() => console.log("Clicked 2!")}
              />
              <PostCard
                date="10 Julho 2025"
                title="Desafio noturno"
                preview="O jogo começou às 22h e foi até de madrugada..."
                selected={false}
                onClick={() => console.log("Clicked 2!")}
              />
            </aside>
            {/* 📰 Post View (Right) */}
            <article className="flex-1 p-4 overflow-y-auto no-scrollbar ">
              {/* This is where you will render the PostView component later */}
              <PostView
                title="Partida entre amigos"
                date="11 Julho 2025"
                author="João Silva"
                imageUrl="/dedic_benfica.jpg"
                text={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?.`}
                /*tags={["amistoso", "zona norte"]}*/
              />
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
