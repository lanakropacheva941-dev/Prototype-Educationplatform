"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export function MobileNavigation() {
  return (
    <Link
      href="/menu"
      aria-label="Открыть меню"
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg lg:hidden"
    >
      <Menu />
    </Link>
  );
}
