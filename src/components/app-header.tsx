"use client";
import {FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {Bell,ChevronDown,Search,UserRound} from "lucide-react";
import {currentUser} from "@/mock-data/current-user";

export function AppHeader(){
 const router=useRouter();const[query,setQuery]=useState("");
 function submitSearch(e:FormEvent){e.preventDefault();const v=query.trim();if(v)router.push(`/search?q=${encodeURIComponent(v)}`)}
 return <header className="sticky top-0 z-20 flex h-[74px] items-center gap-5 border-b border-border bg-white/95 px-4 backdrop-blur md:px-6">
  <Link href="/dashboard" className="text-xl font-black text-primary lg:hidden">Ясно</Link>
  <form onSubmit={submitSearch} className="relative min-w-0 flex-1 md:max-w-[620px]"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} aria-label="Глобальный поиск" placeholder="Поиск по базе знаний..." className="h-9 w-full rounded-lg border border-border bg-[#f7fbfc] pl-10 pr-20 text-xs outline-none focus:border-primary"/><span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded bg-white px-2 py-1 text-[10px] text-muted-foreground md:block">Ctrl + K</span></form>
  <Link href="/notifications" className="relative p-2"><Bell size={20}/><span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent"/></Link>
  <Link href="/profile" className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#f4ece7]"><UserRound size={18}/></span><span className="hidden md:block"><b className="block text-xs">{currentUser.firstName} {currentUser.lastName[0]}.</b><span className="block text-[10px] text-muted-foreground">{currentUser.location}</span></span><ChevronDown size={14}/></Link>
 </header>
}
