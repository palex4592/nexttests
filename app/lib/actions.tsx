"use server";
import directus from "./directus";
import { createItem, deleteItem, updateItem } from "@directus/sdk";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "./supabase";
export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  try {
    await directus.request(
      createItem("todos", {
        title: title,
        description: description,
      })
    );
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Todos.",
    };
  }
  revalidatePath("/docs/todos");
  redirect("/docs/todos");
}
export async function createTodoSupa(formData: FormData) {
  const supabase = createClient();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  try {
    await supabase
      .from("todossupa")
      .insert([{ title: title, description: description }])
      .select();
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Todos.",
    };
  }
  revalidatePath("/docs/todossupa");
  redirect("/docs/todossupa");
}

export async function updateTodo(id: string | number, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  try {
    await directus.request(
      updateItem("todos", id, {
        title: title,
        description: description,
      })
    );
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Todos.",
    };
  }
  revalidatePath("/docs/todos");
  redirect("/docs/todos");
}
export async function updateTodoSupa(id: string | number, formData: FormData) {
  const supabase = createClient();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  try {
    await supabase
      .from("todossupa")
      .update({ title: title, description: description })
      .eq("id", id)
      .select();
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Todos.",
    };
  }
  revalidatePath("/docs/todossupa");
  redirect("/docs/todossupa");
}
export async function deleteTodo(id: string | number) {
  try {
    await directus.request(deleteItem("todos", id));
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Todos.",
    };
  }
  revalidatePath("/docs/todos");
}
export async function deleteTodoSupa(id: string | number) {
  const supabase = createClient();
  try {
    await supabase.from("todossupa").delete().eq("id", id);
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Todos.",
    };
  }
  revalidatePath("/docs/todossupa");
}

export async function ButtonActionReval({ path }: { path: string }) {
  const actionrevaltwo = () => {
    "use server";
    revalidatePath(path);
  };
  return (
    <form
      action={actionrevaltwo}
      className="justify-center flex bg-sky-500 rounded-lg text-white m-10 hover:bg-sky-300"
    >
      <button className="w-96 h-48 flex items-center justify-center gap-5 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-400">
        <span className="scale-150">ActReval</span>
      </button>
    </form>
  );
}
