import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="container py-24 text-center">
      <div className="mx-auto max-w-xl">
        <div className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-fuchsia-500">
          404
        </div>
        <p className="mt-2 text-xl font-semibold">Page introuvable</p>
        <p className="mt-2 text-foreground/70">La page que vous cherchez n'existe pas.</p>
        <Link to="/" className="mt-6 inline-block text-primary hover:underline">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
