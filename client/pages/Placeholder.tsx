export default function Placeholder({ title }: { title: string }) {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-foreground/70">
          Cette page est à construire. Dites-moi ce que vous souhaitez y voir et je
          l’implémenterai rapidement. En attendant, explorez les activités depuis
          l’accueil.
        </p>
      </div>
    </main>
  );
}
