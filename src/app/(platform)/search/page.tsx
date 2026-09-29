"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <div>
      <p className="text-sm text-muted-foreground">Глобальный поиск</p>
      <h1 className="mt-1 text-3xl font-semibold">Результаты поиска</h1>
      <p className="mt-4">Запрос: <strong>{query || "—"}</strong></p>
      <p className="mt-3 text-sm text-muted-foreground">
        Полнотекстовый поиск и фильтрация по правам будут подключены вместе с реальным источником данных.
      </p>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="text-sm text-muted-foreground">Загрузка поиска…</p>}>
      <SearchResults />
    </Suspense>
  );
}
