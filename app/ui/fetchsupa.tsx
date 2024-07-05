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
// export default async function SupaData() {
//   let firstTable;
//   let firstTableName;
//   let fetchFirstTableFields;
//   let supaTable;
//   try {
//     firstTableName = await ApiDirectusFields();
//   } catch (error) {
//     console.error("Database is offline:", error);
//     return <div>Failed to get firstTable.</div>;
//   }
//   try {
//     firstTable = await ApiDirectusTable();
//   } catch (error) {
//     console.error("Database is offline:", error);
//     return <div>Failed to get FIELDS of firstTable.</div>;
//   }
//   try {
//     fetchFirstTableFields = await fetchDirectusFields();
//   } catch (error) {
//     console.error("Database is offline:", error);
//     return <div>Failed to get FIELDS of firstTable.</div>;
//   }
//   try {
//     supaTable = await getAnything("supa", "firstsupa", ["name", "id"]);
//   } catch (error) {
//     console.error("Database is offline:", error);
//     return <div>Failed to get supa.</div>;
//   }
//   return (
//     <div>
//       {/* <h1 className="bg-gray-700 text-white">Makelist TEST</h1>
//       <MakeList thedata={firstTable || []} /> */}
//       <h1 className="bg-gray-700 text-white">Fetch Directus Table WITH API</h1>
//       <ul>
//         {firstTable?.map((item) => (
//           <li key={(item as { id: string | number }).id} className="p-6">
//             <div>
//               <span>ID: </span> {item.id}
//             </div>
//             <div>
//               <span>Title: </span> {item.title}
//             </div>
//             <div>
//               <span>Name: </span> {item.name}
//             </div>
//           </li>
//         ))}
//       </ul>
//       <h1 className="bg-gray-700 text-white">Fetch Directus Fields WITH API</h1>
//       <ul>
//         {firstTableName?.map((item) => (
//           <li key={(item as { id: string | number }).id} className="p-6">
//             <div>
//               <span>ID: </span> {item.id}
//             </div>
//             <div>
//               <span>Name: </span> {item.name}
//             </div>
//           </li>
//         ))}
//       </ul>
//       <h1 className="bg-gray-700 text-white">Fetch Directus Fields</h1>
//       <ul>
//         {fetchFirstTableFields?.map((item) => (
//           <li key={(item as { id: string | number }).id} className="p-6">
//             <div>
//               <span>ID: </span> {item.id}
//             </div>
//             <div>
//               <span>Title: </span> {item.title}
//             </div>
//             <div>
//               <span>Name: </span> {item.name}
//             </div>
//           </li>
//         ))}
//       </ul>
//       <h1 className="bg-gray-700 text-white">
//         getAnything supa firstsupa WITH fields
//       </h1>
//       <ul>
//         {supaTable?.map((item) => (
//           <li key={item.id} className="p-6">
//             <div>
//               <span>ID: </span> {item.id}
//             </div>
//             <div>
//               <span>Name: </span> {item.name}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
