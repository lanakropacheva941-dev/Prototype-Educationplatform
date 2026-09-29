import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ясно — Образовательная платформа",
  description: "Прототип корпоративной образовательной платформы сети оптик «Ясно»",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
