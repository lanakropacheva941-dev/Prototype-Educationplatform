"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { employeeNavigation, roleNavigation } from "@/lib/navigation";
import { currentUser } from "@/mock-data/current-user";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();
  const items = [...employeeNavigation];

  if (currentUser.roles.includes("MANAGER")) items.push(roleNavigation.manager);
  if (currentUser.roles.includes("ADMIN")) items.push(roleNavigation.admin);

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-border bg-surface lg:flex lg:flex-col">
      <div className="flex h-20 items-center border-b border-border px-6">
        <Link href="/dashboard" className="text-2xl font-bold tracking-tight text-primary">
          ЯСНО
        </Link>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-surface-muted text-primary"
                  : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
              )}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border p-4 text-xs text-muted-foreground">
        Прототип образовательной платформы
      </div>
    </aside>
  );
}
