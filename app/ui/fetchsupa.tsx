import { getAnything } from "../lib/data";
import MakeList from "./list";
export default async function SupaData() {
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
    return <div>Failed to get supa.</div>;
  }
  return (
    <div>
      <h1 className="bg-gray-700 text-white">Makelist TEST</h1>
      <MakeList thedata={supaTable || []} />
      <h1 className="bg-gray-700 text-white">
        getAnything supa firstsupa WITH fields
      </h1>
      <ul>
        {supaTable?.map((item) => (
          <li key={item.id} className="p-6">
            <div>
              <span>ID: </span> {item.id}
            </div>
            <div>
              <span>Name: </span> {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
