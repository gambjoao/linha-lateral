import React from "react";
import clsx from "clsx";

interface MatchScoreProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}

export default function MatchScore({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
}: MatchScoreProps) {
  const isTie = homeScore === awayScore;
  const homeWins = homeScore > awayScore;
  const awayWins = awayScore > homeScore;

  const bubbleBase = "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white";

  return (
    <div className="flex items-center gap-1">
      {/* Home team */}
      <span className="font-semibold text-sm text-black">{homeTeam}</span>

      {/* Home score bubble */}
      <div
        className={clsx(
          bubbleBase,
          isTie ? "bg-black" : homeWins ? "bg-orange-500" : "bg-black"
        )}
      >
        {homeScore}
      </div>

      {/* Away score bubble */}
      <div
        className={clsx(
          bubbleBase,
          isTie ? "bg-black" : awayWins ? "bg-orange-500" : "bg-black"
        )}
      >
        {awayScore}
      </div>

      {/* Away team */}
      <span className="font-semibold text-sm text-black">{awayTeam}</span>
    </div>
  );
}
