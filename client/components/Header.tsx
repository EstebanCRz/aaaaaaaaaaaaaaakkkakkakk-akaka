import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context";
import { useState } from "react";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive
      ? "bg-secondary text-secondary-foreground"
      : "text-foreground/70 hover:text-foreground hover:bg-accent"
  }`;

export default function Header() {
  const { user, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent text-lg font-bold flex items-center justify-center text-primary-foreground">
            A
          </span>
          <span className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            AmiGo
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navClass} end>
            Accueil
          </NavLink>
          <NavLink to="/activites" className={navClass}>
            Activités
          </NavLink>
          <NavLink to="/faq" className={navClass}>
            FAQ
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/30"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium hidden sm:inline">
                  {user.name}
                </span>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-card shadow-lg py-2 z-40">
                  <Link
                    to="/profil"
                    className="block px-4 py-2 text-sm hover:bg-accent/30"
                  >
                    Mon Profil
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-accent/30"
                  >
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link to="/connexion">Connexion</Link>
              </Button>
              <Button asChild>
                <Link to="/inscription">Inscription</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
