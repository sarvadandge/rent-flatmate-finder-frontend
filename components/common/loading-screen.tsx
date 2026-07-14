import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />

      <div className="space-y-1 text-center">
        <h2 className="text-xl font-semibold">Rent & Flatmate Finder</h2>

        <p className="text-sm text-muted-foreground">
          Loading your workspace...
        </p>
      </div>
    </div>
  );
}
