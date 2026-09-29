import Link from "next/link";
import { employeeNavigation } from "@/lib/navigation";
export default function MenuPage() {
 return <main className="min-h-screen bg-background p-5"><h1 className="text-2xl font-semibold">Меню</h1><nav className="mt-6 space-y-2">{employeeNavigation.map(({label,href,icon:Icon})=><Link key={href} href={href} className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4"><Icon size={19}/>{label}</Link>)}</nav></main>;
}
