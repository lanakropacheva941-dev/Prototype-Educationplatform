export type UserRole = "EMPLOYEE" | "MANAGER" | "ADMIN";

export type LearningItemType =
  | "material"
  | "regulation"
  | "test"
  | "checklist"
  | "course"
  | "practical_task";

export type LearningStatus =
  | "locked"
  | "available"
  | "in_progress"
  | "waiting_confirmation"
  | "completed"
  | "overdue"
  | "requires_retry";

export interface LearningPathItem {
  id: string;
  type: LearningItemType;
  targetId: string;
  status: LearningStatus;
  title: string;
}
