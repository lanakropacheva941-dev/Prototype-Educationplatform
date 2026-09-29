import {
  BookOpen, CircleHelp, GraduationCap, Home, Newspaper, Route, UserRound,
  BarChart3, ClipboardCheck, UsersRound, Settings2, ShieldCheck
} from "lucide-react";

export const employeeNavigation = [
  { label: "Главная", href: "/dashboard", icon: Home },
  { label: "Профиль", href: "/profile", icon: UserRound },
  { label: "Учебный маршрут", href: "/learning-path", icon: Route },
  { label: "База знаний", href: "/knowledge", icon: BookOpen },
  { label: "Курсы", href: "/courses", icon: GraduationCap },
  { label: "Тестирование", href: "/tests", icon: ClipboardCheck },
  { label: "Мои результаты", href: "/results", icon: BarChart3 },
  { label: "Новости", href: "/news", icon: Newspaper },
  { label: "Как пользоваться", href: "/guide", icon: CircleHelp },
  { label: "Помощь", href: "/help", icon: CircleHelp },
];

export const roleNavigation = {
  manager: { label: "Команда", href: "/team", icon: UsersRound },
  admin: { label: "Управление", href: "/admin", icon: ShieldCheck },
};

export const profileNavigation = { label: "Настройки", href: "/settings", icon: Settings2 };
