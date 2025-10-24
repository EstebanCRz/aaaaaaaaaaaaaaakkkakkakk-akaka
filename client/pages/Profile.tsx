import { useAuth } from "@/context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/connexion");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <main className="container py-10 md:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-20 w-20 rounded-full"
              />
              <div>
                <h1 className="text-3xl font-extrabold">{user.name}</h1>
                <p className="text-foreground/70">{user.email}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Déconnexion
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 mb-8">
            <div className="rounded-xl border bg-background p-6 text-center">
              <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {user.createdActivities ?? 0}
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Activités créées
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 text-center">
              <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {user.joinedActivities ?? 0}
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Activités rejointes
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 text-center">
              <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {user.peopleMet ?? 0}
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                Personnes rencontrées
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Mon profil</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>
            </div>
            <button className="h-11 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
