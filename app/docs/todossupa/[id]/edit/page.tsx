import { EditFormSupa } from "@/app/ui/form";
import { ButtonNavPrevious } from "@/app/ui/buttonnav";
import { todosSupaById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const todo = await todosSupaById(id);
  return (
    <main className="align-middle flex text-4xl flex-col items-center justify-center h-screen p-24">
      <h1 className="p-24">EDIT TODOS PAGE</h1>
      <div>Title: {todo.title}</div>
      <EditFormSupa todo={todo} />
      <ButtonNavPrevious path="/docs/todossupa" text="Todos Supa" />
    </main>
  );
}
