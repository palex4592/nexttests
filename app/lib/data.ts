import directus from "./directus";
import { readItems, readItem } from "@directus/sdk";
import { firstSupaSchema, getFirstTableSchema, TableType } from "./definitions";
import { createClient } from "./supabase";
import { unstable_noStore as noStore } from "next/cache";
// DIRECTUS

export async function ApiDirectusTable() {
  return directus.request<TableType[]>(readItems("firstTable"));
}

export async function todosById(id: string) {
  return directus.request<TableType>(readItem("todos", id));
}

export async function ApiDirectusTest() {
  return directus.request<TableType[]>(readItems("test"));
}

export async function ApiDirectusFields() {
  return directus.request<TableType[]>(
    readItems("firstTable", {
      fields: ["id", "title", "name"],
      sort: ["-date_created"],
    })
  );
}
export async function ApiDirectusTableZ() {
  const firsttable = await directus.request(readItems("firstTable"));
  const validatedfirsttable = getFirstTableSchema.safeParse(firsttable);
  if (!validatedfirsttable.success) {
    console.error(validatedfirsttable.error);
    return [];
  }
  return validatedfirsttable.data;
}

export async function fetchDirectusFields(): Promise<TableType[] | null> {
  noStore();
  const response = await fetch(
    "http://127.0.0.1:8055/items/firstTable?fields=id,title,name"
  );
  const data = await response.json();
  return data.data;
}

export async function FetchFirstVal() {
  const response = await fetch(
    "http://127.0.0.1:8055/items/firstTable?fields=id,name"
  );
  const data = await response.json();
  const validatedfirsttable = getFirstTableSchema.safeParse(data.data);
  if (!validatedfirsttable.success) {
    console.error(validatedfirsttable.error);
    return [];
  }
  return validatedfirsttable.data;
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// SUPA

export async function todosSupaById(id: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("todossupa")
    .select()
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  if (data.length === 0) {
    return null; // or throw an error if you expect the id to always exist
  }
  return data[0];
}

export async function fetchSupaTable() {
  const supabase = createClient();
  const data = await supabase
    .from("firstsupa")
    .select("name")
    .returns<TableType[]>();
  return data;
}

export async function FirstSupaAll() {
  const supabase = createClient();
  const { data: firstsupa } = await supabase
    .from("firstsupa")
    .select("id, name, title, description");
  const validatedfirstsupa = firstSupaSchema.safeParse(firstsupa);
  if (!validatedfirstsupa.success) {
    console.error(validatedfirstsupa.error);
    return [];
  }
  return validatedfirstsupa.data;
}

export async function FetchSupa() {
  const response = await fetch(
    "https://mzjibtzwecqgbevlaysb.supabase.co/rest/v1/firstsupa?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16amlidHp3ZWNxZ2JldmxheXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMjAyOTAsImV4cCI6MjAzMzY5NjI5MH0.pugDffhw1sLYjVPEPIc0BhQHvyq_fWLTNcVdvwpVicY"
  );
  const data = await response.json();
  return data;
}

export async function FetchSupaVal() {
  const response = await fetch(
    "https://mzjibtzwecqgbevlaysb.supabase.co/rest/v1/firstsupa?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16amlidHp3ZWNxZ2JldmxheXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMjAyOTAsImV4cCI6MjAzMzY5NjI5MH0.pugDffhw1sLYjVPEPIc0BhQHvyq_fWLTNcVdvwpVicY&select=id,title,name"
  );
  const data = await response.json();
  const validatedfirsttable = firstSupaSchema.safeParse(data);
  if (!validatedfirsttable.success) {
    console.error(validatedfirsttable.error);
    return [];
  }
  return data;
}
// interface Note {
//   name: string;
// }
// export async function FirstSupaName() {
//   const supabase = createClient();
//   const { data: notes } = await supabase.from("firstsupa").select("name");
//   const names: string[] = notes?.map((note: Note) => note.name) ?? [];
//   return names;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////
// ANY DATABASE/TABLE/FIELDS

export async function getAnything(
  database: string,
  table: string,
  field?: string[]
): Promise<TableType[] | null> {
  noStore();
  if (database === "directus") {
    if (field) {
      const response = directus.request<TableType[]>(
        readItems(table, {
          fields: field,
          sort: ["-date_created"],
        })
      );
      return response;
    } else {
      const response = directus.request<TableType[]>(readItems(table));
      return response;
    }
  } else if (database === "supa") {
    if (field) {
      const supabase = createClient();
      const response = await supabase
        .from(table)
        .select(field.join(", "))
        .returns<TableType[]>();
      return response.data;
    } else {
      return [];
    }
  }

  return [];
}
