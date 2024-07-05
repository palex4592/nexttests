import { getAnything } from "@/app/lib/data";
import { DeleteTodo, DeleteTodoSupa } from "./button";
import { UpdateTodo, UpdateTodoSupa } from "./buttonnav";
import { StyledTodos } from "../styles/globalStyles";

export async function Todos() {
  let todos;
  try {
    todos = await getAnything("directus", "todos");
  } catch (error) {
    console.error("Database is offline:", error);
    return <div>Directus Database is offline.</div>;
  }
  return (
    <main>
      <ul>
        {todos?.map((item) => (
          <StyledTodos key={(item as { id: string | number }).id}>
            <div className="flex justify-end space-x-2">
              <UpdateTodo id={item.id} />
              <DeleteTodo id={item.id} />
            </div>
            <div className="flex">
              <div className="overflow-hidden">{item.title}</div>
            </div>
            <div className="break-words overflow-wrap text-lg">
              {item.description}
            </div>
          </StyledTodos>
        ))}
      </ul>
    </main>
  );
}
export async function Todossupa() {
  const todos = await getAnything("supa", "todossupa", [
    "id",
    "title",
    "description",
  ]);
  return (
    <main>
      <ul>
        {todos?.map((item) => (
          <StyledTodos key={(item as { id: string | number }).id}>
            <div className="flex justify-end space-x-2">
              <UpdateTodoSupa id={item.id} />
              <DeleteTodoSupa id={item.id} />
            </div>
            <div className="flex">
              <div className="overflow-hidden">{item.title}</div>
            </div>
            <div className="break-words overflow-wrap text-lg">
              {item.description}
            </div>
          </StyledTodos>
        ))}
      </ul>
    </main>
  );
}
