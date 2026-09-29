import type { LearningItemType, LearningStatus } from "@/types/domain";

export const learningTypeLabels: Record<LearningItemType, string> = {
  material: "Материал",
  regulation: "Регламент",
  test: "Тест",
  checklist: "Контрольный лист",
  course: "Курс",
  practical_task: "Практическое задание",
};

export const learningStatusLabels: Record<LearningStatus, string> = {
  locked: "Заблокирован",
  available: "Доступен",
  in_progress: "В процессе",
  waiting_confirmation: "Ожидает подтверждения",
  completed: "Выполнен",
  overdue: "Просрочен",
  requires_retry: "Требуется повторное выполнение",
};

export function learningTargetHref(type: LearningItemType, targetId: string) {
  if (type === "material" || type === "regulation") return `/knowledge/materials/${targetId}`;
  if (type === "test") return `/tests/${targetId}`;
  if (type === "course") return `/courses/${targetId}`;
  if (type === "checklist") return `/checklists/${targetId}`;
  return `/practical-tasks/${targetId}`;
}
