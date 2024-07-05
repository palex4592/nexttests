import {
  ApiDirectusFields,
  ApiDirectusTable,
  fetchDirectusFields,
} from "../lib/data";
import MakeList from "./list";

export async function FirstTable() {
  let firstTable;
  try {
    firstTable = await ApiDirectusTable();
  } catch (error) {
    console.error("Database is offline:", error);
    return <div>FAILED API DIRECTUS TABLE</div>;
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
    firstTableFields = await ApiDirectusFields();
  } catch (error) {
    console.error("Database is offline:", error);
    return <div>FAILED API DIRECTUS WITH FIELDS</div>;
  }
  return (
    <div>
      <MakeList thedata={firstTableFields || []} />
    </div>
  );
}

export async function FetchFirstTableFields() {
  let fetchFirstTableFields;
  try {
    fetchFirstTableFields = await fetchDirectusFields();
  } catch (error) {
    console.error("Database is offline:", error);
    return <div>FAILED FETCHING DIRECTUS WITH FIELDS</div>;
  }
  return (
    <div>
      <MakeList thedata={fetchFirstTableFields || []} />
    </div>
  );
}

export default async function DirectusData() {
  return (
    <div>
      <h1 className="bg-gray-700 text-white">API DIRECTUS TABLE</h1>
      <FirstTable />
      <h1 className="bg-gray-700 text-white">API DIRECTUS WITH FIELDS</h1>
      <FirstTableFields />
      <h1 className="bg-gray-700 text-white">FETCH DIRECTUS WITH FIELDS</h1>
      <FetchFirstTableFields />
    </div>
  );
}
