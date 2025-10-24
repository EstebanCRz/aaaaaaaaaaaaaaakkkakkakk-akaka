import { useState } from "react";
import { useActivities } from "@/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Category } from "@/types";

interface CreateActivityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories: Category[] = [
  "Sport",
  "Cuisine",
  "Art",
  "Musique",
  "Jeux",
  "Nature",
  "Bien-être",
  "Technologie",
];

export default function CreateActivityDialog({
  open,
  onOpenChange,
}: CreateActivityDialogProps) {
  const { addActivity } = useActivities();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("Sport");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !description.trim() ||
      !location.trim() ||
      !date ||
      !time ||
      !capacity
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const dateTime = new Date(`${date}T${time}`).toISOString();

    addActivity({
      title: title.trim(),
      description: description.trim(),
      category,
      location: location.trim(),
      date: dateTime,
      organizer: "Vous",
      imageUrl:
        imageUrl.trim() ||
        "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=500&h=400&fit=crop",
      capacity: parseInt(capacity),
      participantsCount: 1,
    });

    setTitle("");
    setDescription("");
    setCategory("Sport");
    setLocation("");
    setDate("");
    setTime("");
    setCapacity("");
    setImageUrl("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Créer une nouvelle activité</DialogTitle>
          <DialogDescription>
            Partagez votre idée d'activité avec la communauté
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Titre de l'activité</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="ex: Sortie Running au Parc"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décrivez votre activité..."
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Catégorie</label>
            <Select value={category} onValueChange={(val) => setCategory(val as Category)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Lieu</label>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="ex: Parc Monceau, Paris"
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">Date</label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Heure</label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Capacité maximale</label>
            <Input
              type="number"
              min="1"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="ex: 12"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">URL de l'image (optionnel)</label>
            <Input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="mt-1"
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Annuler
            </Button>
            <Button type="submit">Créer l'activité</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
