export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-3xl rounded-[var(--radius)] border border-border bg-surface p-8 shadow-sm">
        <p className="mb-2 text-sm font-medium text-primary">Этап 0 · Foundation</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Образовательная платформа «Ясно»
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Технический фундамент прототипа подготовлен. Следующий этап — глобальная
          оболочка интерфейса сотрудника: Sidebar, Header, поиск и уведомления.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-surface-muted px-4 py-2">Next.js</span>
          <span className="rounded-full bg-surface-muted px-4 py-2">TypeScript</span>
          <span className="rounded-full bg-surface-muted px-4 py-2">Tailwind CSS</span>
          <span className="rounded-full bg-surface-muted px-4 py-2">shadcn/ui ready</span>
        </div>
      </section>
    </main>
  );
}
