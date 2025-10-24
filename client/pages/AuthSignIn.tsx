import { useForm } from "react-hook-form";
import { useAuth } from "@/context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface FormValues {
  email: string;
  password: string;
}

export default function AuthSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { login, isLoading, error, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const onSubmit = async (data: FormValues) => {
    await login(data.email, data.password);
  };

  return (
    <main className="container py-10 md:py-16">
      <div className="mx-auto w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-extrabold tracking-tight">
          Connexion
        </h1>
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-md border px-3 py-2"
              placeholder="vous@mail.com"
              {...register("email", { required: "Email requis" })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full rounded-md border px-3 py-2"
              placeholder="••••••••"
              {...register("password", {
                required: "Mot de passe requis",
                minLength: { value: 6, message: "6 caractères minimum" },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            disabled={isLoading}
            className="h-11 w-full rounded-md bg-primary px-4 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </main>
  );
}
