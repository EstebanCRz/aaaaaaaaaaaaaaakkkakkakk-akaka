import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-background/60">
      <div className="container py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold mb-2">AmiGo</div>
          <p className="text-foreground/70">
            Plateforme de partage d'activités entre particuliers. Trouvez, créez
            et rejoignez des moments uniques près de chez vous.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Navigation</div>
          <ul className="space-y-1">
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/activites" className="hover:underline">
                Activités
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p className="text-foreground/70">hello@amigo.fr</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} AmiGo — Tous droits réservés.
      </div>
    </footer>
  );
}
