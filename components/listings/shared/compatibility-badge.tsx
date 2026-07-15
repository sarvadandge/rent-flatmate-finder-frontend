import { Badge } from "@/components/ui/badge";

type CompatibilityBadgeProps = {
  score: number | null;
};

export default function CompatibilityBadge({ score }: CompatibilityBadgeProps) {
  if (score === null) {
    return <Badge variant="outline">Compatibility N/A</Badge>;
  }

  if (score >= 80) {
    return <Badge>{score}% • Best Match</Badge>;
  }

  if (score >= 60) {
    return <Badge variant="secondary">{score}% • Good Match</Badge>;
  }

  return <Badge variant="destructive">{score}% • Poor Match</Badge>;
}
