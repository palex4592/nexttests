import { EditForm } from "@/app/ui/form";
import { ButtonNavPrevious } from "@/app/ui/buttonnav";
import { todosById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const todo = await todosById(id);
  return (
    <main className="align-middle flex text-4xl flex-col items-center justify-center h-screen p-24">
      <h1 className="p-24">EDIT TODOS PAGE</h1>
      <EditForm todo={todo} />
      <ButtonNavPrevious path="/docs/todos" text="Todos" />
    </main>
  );
}
