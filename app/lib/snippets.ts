export const apidirectussnippet = `
import { readItems } from "@directus/sdk";

export async function ApiDirectusTable() {
  return directus.request<TableType[]>(readItems("TableName"));
};
`;
export const apidirectussnippettwo = `
import { readItems } from "@directus/sdk";

export async function ApiDirectusFields() {
  return directus.request<TableType[]>(
    readItems("TableName", {
      fields: ["id", "title", "name"],
      sort: ["-date_created"],
    })
  );
};
`;
export const apisupasnippet = `
import { createClient } from "./supabase";

export async function SupaTableWithFields() {
  const supabase = createClient();
  const data = await supabase
    .from("firstsupa")
    .select("name", "id")
    .returns<TableType[]>();
  return data;
}
`;
export const fetchsupasnippet = `
export async function FetchSupaTable() {
  const response = await fetch(
    "https://database-url.supabase.co/rest/v1/firstsupa?apikey=anon-key"
  );
  const data = await response.json();
  return data;
}
`;
