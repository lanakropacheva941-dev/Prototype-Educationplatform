import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bookmark, CircleAlert } from "lucide-react";
import { materials } from "@/mock-data/materials";

export function generateStaticParams() {
  return Object.keys(materials).map((id) => ({ id }));
}

export default async function MaterialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const material = materials[id as keyof typeof materials];
  if (!material) notFound();
  return (
    <article className="mx-auto max-w-4xl">
      <p className="text-sm text-muted-foreground">{material.section}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{material.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-surface-muted px-3 py-1.5">{material.type}</span><span className="rounded-full bg-surface-muted px-3 py-1.5">{material.studyTime}</span><span className="rounded-full bg-surface-muted px-3 py-1.5">Версия {material.version}</span>{material.required && <span className="rounded-full bg-surface-muted px-3 py-1.5">Обязательно</span>}
      </div>
      <section className="mt-6 rounded-2xl border border-border bg-surface p-6 md:p-8">
        {material.body.map((paragraph)=><p key={paragraph} className="mb-5 leading-7">{paragraph}</p>)}
        <p className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">Обновлено {material.updatedAt}</p>
      </section>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">Отметить как изученное</button>
        <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold"><Bookmark size={17}/>В избранное</button>
        <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold"><CircleAlert size={17}/>Сообщить об ошибке</button>
        <Link href={`/tests/${material.relatedTestId}`} className="inline-flex items-center gap-2 rounded-xl border border-primary px-4 py-2.5 text-sm font-semibold text-primary">Начать тестирование <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
}
