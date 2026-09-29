import type { UserRole } from "@/types/domain";

type CurrentUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  location: string;
  roles: UserRole[];
};

export const currentUser: CurrentUser = {
  id: "user-demo-1",
  firstName: "Анна",
  lastName: "Смирнова",
  email: "anna.smirnova@yasno.example",
  position: "Продавец-консультант",
  location: "Салон №12",
  roles: ["EMPLOYEE"],
};
