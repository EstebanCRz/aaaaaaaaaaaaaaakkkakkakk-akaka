import { createContext, useContext, useMemo, useState } from "react";
import type { Activity, Category } from "@/types";
import { mockActivities } from "@/data/activities";

interface ActivitiesContextValue {
  activities: Activity[];
  joined: Set<string>;
  toggleJoin: (id: string) => void;
  isJoined: (id: string) => boolean;
  search: string;
  setSearch: (q: string) => void;
  category: Category | "Tous";
  setCategory: (c: Category | "Tous") => void;
  filtered: Activity[];
  addActivity: (activity: Omit<Activity, 'id' | 'createdAt'>) => void;
}

const ActivitiesContext = createContext<ActivitiesContextValue | null>(null);

export function ActivitiesProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>(() => mockActivities);
  const [joined, setJoined] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "Tous">("Tous");

  const toggleJoin = (id: string) => {
    setJoined((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const isJoined = (id: string) => joined.has(id);

  const addActivity = (newActivity: Omit<Activity, 'id' | 'createdAt'>) => {
    const activity: Activity = {
      ...newActivity,
      id: Math.random().toString(),
      createdAt: new Date().toISOString(),
    };
    setActivities((prev) => [activity, ...prev]);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return activities
      .filter((a) => (category === "Tous" ? true : a.category === category))
      .filter(
        (a) =>
          !q ||
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q) ||
          a.organizer.toLowerCase().includes(q),
      )
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }, [activities, category, search]);

  const value: ActivitiesContextValue = {
    activities,
    joined,
    toggleJoin,
    isJoined,
    search,
    setSearch,
    category,
    setCategory,
    filtered,
    addActivity,
  };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
}

export function useActivities() {
  const ctx = useContext(ActivitiesContext);
  if (!ctx) throw new Error("useActivities must be used within ActivitiesProvider");
  return ctx;
}
