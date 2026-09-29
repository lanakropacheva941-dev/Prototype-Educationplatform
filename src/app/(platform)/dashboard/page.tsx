import Link from "next/link";
import { AlertTriangle, ArrowRight, BookOpen, Clock3, Route } from "lucide-react";
import { currentUser } from "@/mock-data/current-user";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-sm text-muted-foreground">{currentUser.position} · {currentUser.location}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Добро пожаловать, {currentUser.firstName}!</h1>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-5">
        <div className="flex items-center gap-2 font-semibold"><AlertTriangle size={20} className="text-danger" />Требует вашего внимания</div>
        <div className="mt-4 flex flex-col justify-between gap-4 rounded-xl bg-background p-4 md:flex-row md:items-center">
          <div>
            <p className="font-medium">Тест «Работа с возражениями»</p>
            <p className="mt-1 text-sm text-muted-foreground">Срок прохождения — 30 сентября</p>
          </div>
          <Link href="/tests" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Перейти <ArrowRight size={16}/></Link>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-2xl border border-border bg-surface p-5 xl:col-span-2">
          <div className="flex items-center gap-2 font-semibold"><Route size={20} className="text-primary"/>Учебный маршрут</div>
          <h2 className="mt-5 text-xl font-semibold">Продавец-консультант</h2>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted"><div className="h-full w-[74%] rounded-full bg-primary"/></div>
          <div className="mt-2 flex justify-between text-sm"><span className="text-muted-foreground">Общий прогресс</span><strong>74%</strong></div>
          <div className="mt-5 rounded-xl bg-surface-muted p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Следующий материал</p>
            <p className="mt-1 font-semibold">Работа с возражениями</p>
          </div>
          <Link href="/learning-path" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">Продолжить обучение <ArrowRight size={16}/></Link>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2 font-semibold"><Clock3 size={20} className="text-primary"/>Мой прогресс</div>
          <div className="mt-6 text-5xl font-semibold">74%</div>
          <p className="mt-2 text-sm text-muted-foreground">основного маршрута завершено</p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><span>Материалы</span><strong>32 / 41</strong></div>
            <div className="flex justify-between"><span>Тесты</span><strong>12 / 15</strong></div>
            <div className="flex justify-between"><span>Компетенции</span><strong>68%</strong></div>
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-surface p-5">
        <div className="flex items-center gap-2 font-semibold"><BookOpen size={20} className="text-primary"/>Последние обновления</div>
        <Link href="/knowledge" className="mt-4 flex items-center justify-between rounded-xl bg-background p-4 hover:bg-surface-muted">
          <div><p className="font-medium">Очковые линзы</p><p className="mt-1 text-sm text-muted-foreground">Материал обновлён 15.09.2026</p></div>
          <ArrowRight size={18}/>
        </Link>
      </section>
    </div>
  );
}
