export type Category =
  | "Sport"
  | "Cuisine"
  | "Art"
  | "Musique"
  | "Jeux"
  | "Nature"
  | "Bien-être"
  | "Technologie";

export interface Activity {
  id: string;
  title: string;
  category: Category;
  date: string; // ISO string
  location: string;
  organizer: string;
  description: string;
  imageUrl: string;
  capacity?: number;
  participantsCount?: number;
  createdAt: string; // ISO string
}
