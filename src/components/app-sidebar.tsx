"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {employeeNavigation,roleNavigation} from "@/lib/navigation";
import {currentUser} from "@/mock-data/current-user";
import {cn} from "@/lib/utils";

export function AppSidebar(){
 const pathname=usePathname(); const items=[...employeeNavigation];
 if(currentUser.roles.includes("MANAGER"))items.push(roleNavigation.manager);
 if(currentUser.roles.includes("ADMIN"))items.push(roleNavigation.admin);
 return <aside className="hidden h-screen w-56 shrink-0 border-r border-border bg-white lg:flex lg:flex-col">
  <div className="flex h-[74px] items-center px-6"><Link href="/dashboard"><span className="block text-[27px] font-black tracking-tight text-primary">Ясно</span><span className="-mt-1 block text-[9px] tracking-[.25em] text-muted-foreground">СЕТЬ ОПТИК</span></Link></div>
  <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">{items.map(item=>{const Icon=item.icon;const active=pathname===item.href||pathname.startsWith(item.href+"/");return <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition",active?"bg-[#e3f8f8] text-primary":"text-[#46617e] hover:bg-surface-muted")}><Icon size={17}/><span>{item.label}</span></Link>})}</nav>
 </aside>
}
