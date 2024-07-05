import { getAnything } from "../lib/data";
import MakeList from "./list";
import {
  ApiDirectusFields,
  ApiDirectusTable,
  fetchDirectusFields,
} from "../lib/data";

export async function FirstTable() {
  let firstTable;
  try {
    firstTable = await getAnything("directus", "firstTable");
  } catch (error) {
    console.error("Database is offline:", error);
    return <div>Failed</div>;
  }
  return (
    <div>
      <MakeList thedata={firstTable || []} />
    </div>
  );
}

export async function FirstTableFields() {
  let firstTableFields;
  try {
    firstTableFields = await getAnything("directus", "firstTable", [
      "id",
      "name",
      "title",
      "description",
    ]);
  } catch (error) {
    console.error("Database is offline:", error);
    return <div>Failed</div>;
  }
  return (
    <div>
      <MakeList thedata={firstTableFields || []} />
    </div>
  );
}

export async function SupaTable() {
  let supaTable;
  try {
    supaTable = await getAnything("supa", "firstsupa", [
      "name",
      "id",
      "title",
      "description",
    ]);
  } catch (error) {
    console.error("Database is offline:", error);
    return <div>Failed</div>;
  }
  return (
    <div>
      <MakeList thedata={supaTable || []} />
    </div>
  );
}

export async function Anything() {
  return (
    <div>
      <h1 className="bg-gray-700 text-white mt-12">
        Trying getAnything DIRECTUS TABLE
      </h1>
      <FirstTable />
      <h1 className="bg-gray-700 text-white mt-12">
        Trying getAnything DIRECTUS WITH FIELDS
      </h1>
      <FirstTableFields />
      <h1 className="bg-gray-700 text-white mt-12">
        Trying getAnything SUPA with FIELDS
      </h1>
      <SupaTable />
    </div>
  );
}
