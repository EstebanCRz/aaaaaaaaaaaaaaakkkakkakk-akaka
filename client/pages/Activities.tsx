import SearchBar from "@/components/SearchBar";
import ActivityCard from "@/components/ActivityCard";
import SwipeCards from "@/components/SwipeCards";
import { useActivities } from "@/context";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ActivitiesPage() {
  const { filtered } = useActivities();
  const isMobile = useIsMobile();

  return (
    <main className="container py-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Toutes les activités
          </h1>
          <p className="text-foreground/70">
            Filtrez par mots-clés et catégories.
          </p>
        </div>
        <Link to="/profil" className="text-primary hover:underline">
          Créer une activité
        </Link>
      </div>
      <SearchBar />
      {isMobile && filtered.length > 0 ? (
        <div className="mt-8">
          <SwipeCards activities={filtered} />
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
      )}
    </main>
  );
}
