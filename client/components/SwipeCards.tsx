import { useState, useRef } from "react";
import { Activity } from "@/types";
import { useActivities } from "@/context";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SwipeCards({ activities }: { activities: Activity[] }) {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const { toggleJoin, isJoined } = useActivities();

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && current < activities.length - 1) setCurrent(current + 1);
      else if (diff < 0 && current > 0) setCurrent(current - 1);
    }
  };

  if (!activities.length) return null;

  const activity = activities[current];
  const date = new Date(activity.date).toLocaleString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
  const joined = isJoined(activity.id);

  return (
    <div className="flex flex-col gap-4">
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative aspect-[3/4] overflow-hidden rounded-3xl border-4 border-primary shadow-xl"
      >
        <img
          src={activity.imageUrl}
          alt={activity.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-sm font-medium mb-3">
            {activity.category}
          </div>
          <h2 className="text-2xl font-bold mb-2 leading-tight">
            {activity.title}
          </h2>
          <p className="text-sm text-gray-200 mb-3 line-clamp-2">
            {activity.description}
          </p>
          <div className="text-xs text-gray-300 space-y-1">
            <p>📍 {activity.location}</p>
            <p>🗓️ {date}</p>
            <p>👤 {activity.organizer}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => current > 0 && setCurrent(current - 1)}
          disabled={current === 0}
          className="p-2 rounded-full bg-secondary disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-1">
          {activities.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-muted w-2"
              }`}
              aria-label={`Activité ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() =>
            current < activities.length - 1 && setCurrent(current + 1)
          }
          disabled={current === activities.length - 1}
          className="p-2 rounded-full bg-secondary disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleJoin(activity.id)}
          className={`flex-1 h-12 rounded-lg font-medium transition-colors text-base ${
            joined
              ? "bg-destructive text-destructive-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {joined ? "Se désinscrire" : "S'inscrire"}
        </button>
      </div>
      <p className="text-center text-sm text-foreground/60">
        {current + 1} / {activities.length}
      </p>
    </div>
  );
}
