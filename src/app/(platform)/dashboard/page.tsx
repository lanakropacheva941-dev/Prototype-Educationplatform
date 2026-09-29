import Link from "next/link";
import {ArrowRight,BookOpen,ClipboardList,FileText,Route,Sun} from "lucide-react";
import {currentUser} from "@/mock-data/current-user";

export default function DashboardPage(){
 return <div className="space-y-4">
  <section className="relative overflow-hidden rounded-xl border border-border bg-white px-6 py-5">
   <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-bl from-[#b9f0f2] via-[#e8fafb] to-transparent"/>
   <div className="relative"><h1 className="text-[28px] font-bold tracking-tight">Добро пожаловать, {currentUser.firstName}!</h1><p className="mt-1 text-sm text-muted-foreground">Продолжайте обучение и развивайте свои знания</p></div>
  </section>
  <div className="grid gap-3 md:grid-cols-3">
   <section className="rounded-xl border border-border bg-white p-4 md:col-span-2"><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-[8px] border-primary text-xl font-bold">74%</div><div className="flex-1"><p className="text-xs text-muted-foreground">Обучение продавца-консультанта</p><p className="mt-1 text-sm font-semibold">Общий прогресс</p><Link href="/learning-path" className="mt-3 inline-flex rounded-lg bg-primary px-5 py-2 text-xs font-semibold text-white">Продолжить</Link></div></div></section>
   <Link href="/learning-path" className="rounded-xl border border-border bg-white p-4 hover:border-primary"><p className="text-xs text-muted-foreground">Следующий материал</p><div className="mt-3 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-[#e5f8f8] text-primary"><FileText size={20}/></span><div><b className="text-sm">Работа с возражениями</b><p className="text-xs text-muted-foreground">Отдел продаж · 15 минут</p></div><ArrowRight className="ml-auto text-primary" size={18}/></div></Link>
  </div>
  <div className="grid gap-3 sm:grid-cols-3">
   <Link href="/knowledge" className="rounded-xl border border-border bg-white p-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-[#fff6d9] text-[#d69b00]"><ClipboardList size={19}/></span><div><b className="text-sm">Назначенные материалы</b><p className="text-xs text-muted-foreground">3 материала</p></div></div><p className="mt-3 text-xs text-danger">Требуют изучения</p></Link>
   <Link href="/tests" className="rounded-xl border border-border bg-white p-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-[#ffe9eb] text-danger"><FileText size={19}/></span><div><b className="text-sm">Не пройдены тесты</b><p className="text-xs text-muted-foreground">2 теста</p></div></div><p className="mt-3 text-xs text-danger">Пройти до 30 сентября</p></Link>
   <Link href="/news" className="rounded-xl border border-border bg-white p-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-[#fff5d7] text-[#e3a000]"><Sun size={20}/></span><div><b className="text-sm">Новые обновления</b><p className="text-xs text-muted-foreground">1 раздел</p></div></div><p className="mt-3 text-xs text-danger">«Очковые линзы»</p></Link>
  </div>
  <section><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-bold">Последние материалы</h2><Link href="/knowledge" className="text-xs text-primary">Посмотреть все</Link></div><div className="grid gap-3 md:grid-cols-3">{[["Основы оптики","Учебный материал"],["Стандарты обслуживания","Регламент"],["Работа с возражениями","Учебный материал"]].map(([t,s])=><div key={t} className="rounded-xl border border-border bg-white p-4"><BookOpen size={20} className="text-primary"/><b className="mt-3 block text-sm">{t}</b><p className="mt-1 text-xs text-muted-foreground">{s}</p></div>)}</div></section>
 </div>
}
