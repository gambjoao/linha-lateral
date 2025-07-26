import MatchScore from "./MatchScore";

type Match = {
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
};

type MatchScoreListProps = {
  matches: Match[];
};

export function MatchScoreList({ matches }: MatchScoreListProps) {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-12 flex-nowrap">
        {matches.map((match, index) => (
          <MatchScore
            key={index}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            homeScore={match.homeScore}
            awayScore={match.awayScore}
          />
        ))}
      </div>
    </div>
  );
}
