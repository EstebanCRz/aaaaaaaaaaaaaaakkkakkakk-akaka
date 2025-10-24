import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <main className="container py-10 md:py-14">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Foire aux questions</h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        <AccordionItem value="q1">
          <AccordionTrigger>Comment créer une activité ?</AccordionTrigger>
          <AccordionContent>
            Depuis votre profil, cliquez sur « Créer une activité », remplissez le formulaire (titre, description, date, lieu, catégorie) puis validez.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>Comment m’inscrire ou me désinscrire ?</AccordionTrigger>
          <AccordionContent>
            Ouvrez la fiche de l’activité et utilisez le bouton « S’inscrire » ou « Se désinscrire » selon votre état d’inscription.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>Le service est-il payant ?</AccordionTrigger>
          <AccordionContent>
            L’utilisation de la plateforme est gratuite. Certains hôtes peuvent demander une participation aux frais indiquée dans la description.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>Comment signaler un problème ?</AccordionTrigger>
          <AccordionContent>
            Contactez-nous via hello@partactivites.fr ou la page Mentions légales. L’équipe modération répond rapidement.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
