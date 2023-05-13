import "./globals.css";
import { Inter } from "next/font/google";
import ReduxContext from "./context/reduxContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloud-Storage",
  description: "Remote storage for you",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxContext>{children}</ReduxContext>
      </body>
    </html>
  );
}
