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

  const bubbleBase = "w-6 h-6 rounded-full flex items-center justify-center text-base font-bold text-background";

  return (
    <div className="flex items-center gap-1">
      {/* Home team */}
      <span className="font-semibold text-sm">{homeTeam}</span>

      {/* Home score bubble */}
      <div
        className={clsx(
          bubbleBase,
          isTie ? "bg-foreground" : homeWins ? "bg-accent" : "bg-foreground"
        )}
      >
        {homeScore}
      </div>

      {/* Away score bubble */}
      <div
        className={clsx(
          bubbleBase,
          isTie ? "bg-foreground" : awayWins ? "bg-accent" : "bg-foreground"
        )}
      >
        {awayScore}
      </div>

      {/* Away team */}
      <span className="font-semibold text-sm">{awayTeam}</span>
    </div>
  );
}
