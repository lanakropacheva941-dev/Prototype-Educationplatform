import type { LearningPathItem } from "@/types/domain";

export const sellerLearningPath = {
  id: "path-seller-consultant",
  title: "Продавец-консультант",
  description: "Основной маршрут адаптации и обязательного обучения нового сотрудника оптики.",
  progress: 74,
  deadline: "30.09.2026",
  items: [
    { id: "step-1", type: "material", targetId: "material-company", status: "completed", title: "Знакомство с компанией" },
    { id: "step-2", type: "regulation", targetId: "reg-service-standard", status: "completed", title: "Стандарт обслуживания клиентов" },
    { id: "step-3", type: "course", targetId: "course-optics-basics", status: "completed", title: "Основы оптики" },
    { id: "step-4", type: "material", targetId: "material-lenses", status: "completed", title: "Очковые линзы" },
    { id: "step-5", type: "material", targetId: "material-objections", status: "in_progress", title: "Работа с возражениями" },
    { id: "step-6", type: "test", targetId: "test-objections", status: "available", title: "Тест: Работа с возражениями" },
    { id: "step-7", type: "checklist", targetId: "checklist-sales", status: "locked", title: "Контрольный лист: консультация клиента" },
    { id: "step-8", type: "practical_task", targetId: "practice-consultation", status: "locked", title: "Практика: подбор решения клиенту" },
  ] satisfies LearningPathItem[],
};
