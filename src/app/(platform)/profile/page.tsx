import { currentUser } from "@/mock-data/current-user";
export default function ProfilePage() {
  return <div><p className="text-sm text-muted-foreground">Личный профиль</p><h1 className="mt-1 text-3xl font-semibold">{currentUser.firstName} {currentUser.lastName}</h1><div className="mt-6 rounded-2xl border border-border bg-surface p-5"><p><strong>Должность:</strong> {currentUser.position}</p><p className="mt-2"><strong>Подразделение:</strong> {currentUser.location}</p><p className="mt-2"><strong>E-mail:</strong> {currentUser.email}</p></div></div>;
}
