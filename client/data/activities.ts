import { Activity } from "@/types";

export const mockActivities: Activity[] = [
  {
    id: "1",
    title: "Sortie Running au Parc",
    category: "Sport",
    date: new Date(Date.now() + 86400000).toISOString(),
    location: "Parc Monceau, Paris",
    organizer: "Camille",
    description:
      "Rejoignez-nous pour un footing convivial de 5km, tous niveaux bienvenus !",
    imageUrl:
      "https://images.pexels.com/photos/8417437/pexels-photo-8417437.jpeg",
    capacity: 12,
    participantsCount: 7,
    createdAt: new Date().toISOString(),
  },

  {
    id: "3",
    title: "Balade Photo au Bord de l'Eau",
    category: "Art",
    date: new Date(Date.now() + 3 * 86400000).toISOString(),
    location: "Bordeaux",
    organizer: "Zoé",
    description:
      "Découvrons les meilleurs spots photo au coucher du soleil, débutants bienvenus.",
    imageUrl:
      "https://images.pexels.com/photos/5566790/pexels-photo-5566790.jpeg",
    capacity: 15,
    participantsCount: 12,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Initiation Yoga Vinyasa",
    category: "Bien-être",
    date: new Date(Date.now() + 5 * 86400000).toISOString(),
    location: "Marseille",
    organizer: "Nora",
    description:
      "Séance détente et respiration, pensez à apporter votre tapis de yoga.",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop",
    capacity: 10,
    participantsCount: 4,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Soirée Jeux de Société",
    category: "Jeux",
    date: new Date(Date.now() + 4 * 86400000).toISOString(),
    location: "Toulouse",
    organizer: "Mathis",
    description:
      "Ambiance conviviale, venez avec vos jeux préférés, boissons partagées.",
    imageUrl:
      "https://images.pexels.com/photos/4792371/pexels-photo-4792371.jpeg",
    capacity: 20,
    participantsCount: 16,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Randonnée en Forêt",
    category: "Nature",
    date: new Date(Date.now() + 6 * 86400000).toISOString(),
    location: "Chartreuse",
    organizer: "Romain",
    description:
      "Parcours de 10km, prévoir chaussures de marche et eau. Belle vue garantie !",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    capacity: 14,
    participantsCount: 9,
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    title: "Concert Jazz Improvisé",
    category: "Musique",
    date: new Date(Date.now() + 7 * 86400000).toISOString(),
    location: "Nice",
    organizer: "Sophie",
    description: "Soirée musicale décontractée au son du jazz, apéro inclus.",
    imageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=400&fit=crop",
    capacity: 25,
    participantsCount: 18,
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    title: "Picnic d'Été en Montagne",
    category: "Nature",
    date: new Date(Date.now() + 8 * 86400000).toISOString(),
    location: "Annecy",
    organizer: "Luc",
    description: "Partageons un moment convivial avec vue panoramique.",
    imageUrl:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&h=400&fit=crop",
    capacity: 30,
    participantsCount: 22,
    createdAt: new Date().toISOString(),
  },
];
