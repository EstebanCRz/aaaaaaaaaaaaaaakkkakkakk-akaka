import { useActivities } from "@/context";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

const categories: (Category | "Tous")[] = [
  "Tous",
  "Sport",
  "Cuisine",
  "Art",
  "Musique",
  "Jeux",
  "Nature",
  "Bien-être",
  "Technologie",
];

export default function SearchBar() {
  const { search, setSearch, category, setCategory } = useActivities();
  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Chercher une activité (mot-clé, ville, organisateur)"
          className="w-full h-12 rounded-xl border bg-background px-4 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
            aria-label="Effacer"
          >
            ×
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm border",
              c === category
                ? "bg-primary text-primary-foreground border-transparent"
                : "bg-secondary text-secondary-foreground hover:bg-accent",
            )}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
