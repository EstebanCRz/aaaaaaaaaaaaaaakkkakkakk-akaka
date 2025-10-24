import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import ActivityCard from "@/components/ActivityCard";
import CreateActivityDialog from "@/components/CreateActivityDialog";
import { useActivities } from "@/context";
import { Link } from "react-router-dom";

export default function Index() {
  const { filtered, setSearch } = useActivities();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setSearch("");
  }, [setSearch]);

  const recent = filtered.slice(0, 8);

  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-accent/15 to-secondary/15" />
        <div className="container py-12 md:py-20 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Partage d'activités entre particuliers
            </h1>
            <p className="text-lg text-foreground/70">
              Découvrez, créez et rejoignez des activités près de chez vous :
              sport, cuisine, art, musique, nature…
            </p>
            <div className="rounded-2xl bg-background/70 p-4 shadow-sm">
              <SearchBar />
            </div>
            <div className="flex items-center gap-4 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" /> Communauté
                locale
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" /> Convivial
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-secondary" /> Gratuit
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {recent.slice(0, 6).map((a) => (
                <div
                  key={a.id}
                  className="aspect-[3/4] overflow-hidden rounded-2xl"
                >
                  <img
                    src={a.imageUrl}
                    alt={a.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              Activités récentes
            </h2>
            <p className="text-foreground/70">
              Les dernières propositions de la communauté
            </p>
          </div>
          <Link to="/activites" className="text-primary hover:underline">
            Voir tout
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recent.map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
      </section>

      <section className="container py-8 md:py-12">
        <div className="rounded-3xl border bg-gradient-to-br from-background to-background/70 p-8 md:p-10 text-center">
          <h3 className="text-2xl font-bold mb-2">
            Vous avez une idée d'activité ?
          </h3>
          <p className="text-foreground/70 mb-6">
            Publiez-la et invitez vos voisins à participer.
          </p>
          <button
            onClick={() => setOpenDialog(true)}
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Créer une activité
          </button>
        </div>
      </section>

      <CreateActivityDialog open={openDialog} onOpenChange={setOpenDialog} />
    </>
  );
}
