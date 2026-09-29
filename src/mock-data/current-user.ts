import type { UserRole } from "@/types/domain";

export const currentUser = {
  id: "user-demo-1",
  firstName: "Анна",
  lastName: "Смирнова",
  email: "anna.smirnova@yasno.example",
  position: "Продавец-консультант",
  location: "Салон №12",
  roles: ["EMPLOYEE"] satisfies UserRole[],
};
