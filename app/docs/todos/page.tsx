import { ButtonNavNext } from "@/app/ui/buttonnav";
import { Todos } from "@/app/ui/todos";

export default async function Page() {
  return (
    <main className="flex text-4xl flex-col items-center justify-between p-24">
      <h1>Directus TODOS PAGE</h1>
      <ButtonNavNext path="/docs/todos/create" text="Create" />
      <Todos />
    </main>
  );
}
