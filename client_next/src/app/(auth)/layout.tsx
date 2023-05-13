import "../globals.css";
import { Header } from "../components/ui/header";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  );
}
