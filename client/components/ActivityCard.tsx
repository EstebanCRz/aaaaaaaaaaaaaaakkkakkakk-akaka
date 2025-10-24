import { Activity } from "@/types";
import { useActivities } from "@/context";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ActivityCard({ activity }: { activity: Activity }) {
  const { isJoined, toggleJoin } = useActivities();
  const joined = isJoined(activity.id);
  const date = new Date(activity.date).toLocaleString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article className="group overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/activites/${activity.id}`} className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={activity.imageUrl}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur">
          {activity.category}
        </span>
      </Link>
      <div className="space-y-3 p-4">
        <Link to={`/activites/${activity.id}`} className="line-clamp-1 text-lg font-semibold hover:underline">
          {activity.title}
        </Link>
        <p className="line-clamp-2 text-sm text-foreground/70">{activity.description}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground/70">
          <span>📍 {activity.location}</span>
          <span>•</span>
          <span>���️ {date}</span>
          <span>•</span>
          <span>👤 {activity.organizer}</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="text-xs text-foreground/60">
            {activity.participantsCount ?? 0}/{activity.capacity ?? 0} inscrits
          </div>
          <Button onClick={() => toggleJoin(activity.id)} variant={joined ? "secondary" : "default"}>
            {joined ? "Se désinscrire" : "S'inscrire"}
          </Button>
        </div>
      </div>
    </article>
  );
}
