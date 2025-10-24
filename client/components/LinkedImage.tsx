import { Link } from "react-router-dom";

export default function LinkedImage({ to, src, alt, className }: { to: string; src: string; alt: string; className?: string }) {
  return (
    <Link to={to} className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl overflow-hidden">
      <img src={src} alt={alt} className={className ?? "w-full h-full object-cover"} />
    </Link>
  );
}
