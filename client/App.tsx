import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ActivitiesPage from "./pages/Activities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ActivitiesProvider, AuthProvider } from "./context";
import FAQPage from "./pages/FAQ";
import AuthSignIn from "./pages/AuthSignIn";
import AuthSignUp from "./pages/AuthSignUp";
import ActivityDetails from "./pages/ActivityDetails";
import Placeholder from "./pages/Placeholder";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <ActivitiesProvider>
              <div className="flex min-h-screen flex-col">
                <Header />
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/activites" element={<ActivitiesPage />} />
                    <Route
                      path="/activites/:id"
                      element={<ActivityDetails />}
                    />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/connexion" element={<AuthSignIn />} />
                    <Route path="/inscription" element={<AuthSignUp />} />
                    <Route path="/profil" element={<Profile />} />
                    <Route
                      path="/admin"
                      element={<Placeholder title="Backoffice" />}
                    />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <Footer />
              </div>
            </ActivitiesProvider>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
