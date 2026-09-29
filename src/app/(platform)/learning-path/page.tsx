import { CalendarDays, Route } from "lucide-react";
import { LearningPathStep } from "@/components/learning-path-step";
import { sellerLearningPath } from "@/mock-data/learning-path";

export default function LearningPathPage() {
  return (
    <div className="space-y-6">
      <section><p className="text-sm text-muted-foreground">Основное обязательное обучение</p><h1 className="mt-1 text-3xl font-semibold tracking-tight">Учебный маршрут</h1></section>
      <section className="rounded-2xl border border-border bg-surface p-5 md:p-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
          <div><div className="flex items-center gap-2 text-primary"><Route size={20}/><span className="text-sm font-semibold">Активный маршрут</span></div><h2 className="mt-3 text-2xl font-semibold">{sellerLearningPath.title}</h2><p className="mt-2 max-w-2xl text-sm text-muted-foreground">{sellerLearningPath.description}</p></div>
          <div className="rounded-xl bg-surface-muted px-4 py-3"><div className="flex items-center gap-2 text-sm"><CalendarDays size={17}/><span>Срок: <strong>{sellerLearningPath.deadline}</strong></span></div></div>
        </div>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-surface-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${sellerLearningPath.progress}%` }}/></div>
        <div className="mt-2 flex justify-between text-sm"><span className="text-muted-foreground">Общий прогресс</span><strong>{sellerLearningPath.progress}%</strong></div>
      </section>
      <section><div className="mb-4"><h2 className="text-xl font-semibold">Этапы обучения</h2><p className="mt-1 text-sm text-muted-foreground">Следующие обязательные этапы открываются после выполнения предыдущих условий.</p></div><div className="space-y-3">{sellerLearningPath.items.map((item,index)=><LearningPathStep key={item.id} item={item} index={index}/>)}</div></section>
    </div>
  );
}
