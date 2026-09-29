import Link from "next/link";
import { Check, Circle, Clock3, LockKeyhole, RotateCcw } from "lucide-react";
import type { LearningPathItem } from "@/types/domain";
import { learningStatusLabels, learningTargetHref, learningTypeLabels } from "@/lib/learning";
import { cn } from "@/lib/utils";

const icons = {
  locked: LockKeyhole,
  available: Circle,
  in_progress: Clock3,
  waiting_confirmation: Clock3,
  completed: Check,
  overdue: Clock3,
  requires_retry: RotateCcw,
};

export function LearningPathStep({ item, index }: { item: LearningPathItem; index: number }) {
  const Icon = icons[item.status];
  const locked = item.status === "locked";
  const body = (
    <div className={cn(
      "flex gap-4 rounded-2xl border p-4 transition md:p-5",
      item.status === "in_progress" ? "border-primary bg-surface" : "border-border bg-surface",
      !locked && "hover:border-primary/60",
      locked && "opacity-60",
    )}>
      <div className={cn(
        "grid h-10 w-10 shrink-0 place-items-center rounded-full",
        item.status === "completed" ? "bg-primary text-primary-foreground" : "bg-surface-muted text-primary",
      )}>
        <Icon size={19}/>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">Этап {index + 1}</span>
          <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs">{learningTypeLabels[item.type]}</span>
        </div>
        <h3 className="mt-2 font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{learningStatusLabels[item.status]}</p>
      </div>
      {!locked && <span className="self-center text-sm font-semibold text-primary">Открыть</span>}
    </div>
  );

  if (locked) return body;
  return <Link href={learningTargetHref(item.type, item.targetId)}>{body}</Link>;
}
