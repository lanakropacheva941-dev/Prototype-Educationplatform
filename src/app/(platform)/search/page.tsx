export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  return (
    <div>
      <p className="text-sm text-muted-foreground">Глобальный поиск</p>
      <h1 className="mt-1 text-3xl font-semibold">Результаты поиска</h1>
      <p className="mt-4">Запрос: <strong>{q || "—"}</strong></p>
      <p className="mt-3 text-sm text-muted-foreground">Полнотекстовый поиск и фильтрация по правам будут подключены вместе с реальным источником данных.</p>
    </div>
  );
}
