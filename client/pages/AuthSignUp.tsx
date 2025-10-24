import { useForm } from "react-hook-form";

interface FormValues { name: string; email: string; password: string; confirm: string }

export default function AuthSignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log("signup", data);
  };
  const pwd = watch("password");
  return (
    <main className="container py-10 md:py-16">
      <div className="mx-auto w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-extrabold tracking-tight">Inscription</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Nom</label>
            <input className="w-full rounded-md border px-3 py-2" placeholder="Votre nom" {...register("name", { required: "Nom requis" })} />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input type="email" className="w-full rounded-md border px-3 py-2" placeholder="vous@mail.com" {...register("email", { required: "Email requis" })} />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Mot de passe</label>
            <input type="password" className="w-full rounded-md border px-3 py-2" placeholder="••••••••" {...register("password", { required: "Mot de passe requis", minLength: { value: 6, message: "6 caractères minimum" } })} />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Confirmer le mot de passe</label>
            <input type="password" className="w-full rounded-md border px-3 py-2" placeholder="••••••••" {...register("confirm", { validate: (v) => v === pwd || "Les mots de passe ne correspondent pas" })} />
            {errors.confirm && <p className="mt-1 text-sm text-red-600">{errors.confirm.message as string}</p>}
          </div>
          <button className="h-11 w-full rounded-md bg-primary px-4 font-medium text-primary-foreground hover:bg-primary/90">Créer mon compte</button>
        </form>
      </div>
    </main>
  );
}
