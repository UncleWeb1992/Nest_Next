import "../globals.css";
import { Header } from "../components/ui/header";

export default async function DahsboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="container">{children}</div>
    </main>
  );
}
