import { useParams, Link } from "react-router-dom";
import { useActivities } from "@/context";
import { Button } from "@/components/ui/button";
import ActivityCard from "@/components/ActivityCard";
import { useState } from "react";

export default function ActivityDetails() {
  const { id } = useParams();
  const { activities, filtered, isJoined, toggleJoin } = useActivities();
  const activity = activities.find((a) => a.id === id);
  const [chatMessages, setChatMessages] = useState<Array<{ id: string; name: string; message: string; timestamp: string }>>([]);
  const [newMessage, setNewMessage] = useState("");
  const joined = activity ? isJoined(activity.id) : false;

  const handleSendMessage = () => {
    if (newMessage.trim() && activity) {
      const message = {
        id: Math.random().toString(),
        name: "Vous",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage("");
    }
  };

  if (!activity) {
    return (
      <main className="container py-16 text-center">
        <h1 className="text-2xl font-bold">Activité introuvable</h1>
        <Link to="/activites" className="mt-4 inline-block text-primary hover:underline">Retour aux activités</Link>
      </main>
    );
  }

  const date = new Date(activity.date).toLocaleString("fr-FR", {
    weekday: "long", day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit"
  });

  return (
    <main className="container py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="overflow-hidden rounded-2xl border">
            <img src={activity.imageUrl} alt={activity.title} className="w-full h-[340px] object-cover" />
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight">{activity.title}</h1>
            <div className="text-foreground/70">{activity.category} • {activity.location} • {date} • Hôte: {activity.organizer}</div>
            <p className="text-foreground/80 leading-relaxed">{activity.description}</p>
          </div>

          {joined && (
            <div className="rounded-2xl border p-6 bg-card">
              <h2 className="text-lg font-semibold mb-4">💬 Discussion avec les participants</h2>
              <div className="space-y-4 mb-4 h-64 overflow-y-auto bg-background/50 rounded-lg p-4">
                {chatMessages.length === 0 ? (
                  <p className="text-foreground/50 text-sm">Aucun message pour le moment. Soyez le premier à démarrer la conversation !</p>
                ) : (
                  chatMessages.map((msg) => (
                    <div key={msg.id} className="flex gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{msg.name}</span>
                          <span className="text-xs text-foreground/50">{msg.timestamp}</span>
                        </div>
                        <p className="text-sm text-foreground/80 mt-1">{msg.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button onClick={handleSendMessage} size="sm">
                  Envoyer
                </Button>
              </div>
            </div>
          )}
        </div>
        <aside className="lg:col-span-1 space-y-4">
          <div className="rounded-2xl border p-5">
            <h2 className="mb-3 text-lg font-semibold">Participer</h2>
            <p className="text-sm text-foreground/70 mb-4">Capacité: {activity.capacity ?? 0} • Inscrits: {activity.participantsCount ?? 0}</p>
            <Button
              onClick={() => toggleJoin(activity.id)}
              variant={joined ? "secondary" : "default"}
              className="w-full"
            >
              {joined ? "✓ Inscrit" : "S'inscrire"}
            </Button>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="mb-3 text-sm font-semibold">Autres activités</h3>
            <div className="grid grid-cols-1 gap-4">
              {filtered.filter((a) => a.id !== activity.id).slice(0,3).map((a) => (
                <ActivityCard key={a.id} activity={a} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
