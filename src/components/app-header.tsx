"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Bell, Search, Settings2, UserRound } from "lucide-react";
import { currentUser } from "@/mock-data/current-user";

export function AppHeader() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function submitSearch(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    if (value) router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  return (
    <header className="sticky top-0 z-20 flex min-h-20 items-center gap-4 border-b border-border bg-surface/95 px-4 backdrop-blur md:px-6">
      <Link href="/dashboard" className="text-xl font-bold text-primary lg:hidden">ЯСНО</Link>

      <form onSubmit={submitSearch} className="relative min-w-0 flex-1 md:max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Глобальный поиск"
          placeholder="Поиск по материалам, курсам и тестам"
          className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition focus:border-primary"
        />
      </form>

      <Link href="/notifications" aria-label="Уведомления" className="relative rounded-xl p-2.5 hover:bg-surface-muted">
        <Bell size={20} />
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger" />
      </Link>

      <Link href="/settings" aria-label="Настройки" className="hidden rounded-xl p-2.5 hover:bg-surface-muted sm:block">
        <Settings2 size={20} />
      </Link>

      <Link href="/profile" className="flex items-center gap-3 rounded-xl p-1.5 hover:bg-surface-muted">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-surface-muted text-primary">
          <UserRound size={19} />
        </span>
        <span className="hidden text-left md:block">
          <span className="block text-sm font-semibold">{currentUser.firstName} {currentUser.lastName}</span>
          <span className="block text-xs text-muted-foreground">{currentUser.position}</span>
        </span>
      </Link>
    </header>
  );
}
