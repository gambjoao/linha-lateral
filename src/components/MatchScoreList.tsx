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
    <div className="flex gap-12">
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
  );
}
