import { TableType } from "../lib/definitions";

export default function MakeList({ thedata }: { thedata: TableType[] }) {
  return (
    <div>
      <ul>
        {thedata?.map((item) => (
          <li key={item.id} className="p-6">
            <div>
              <span>ID: </span> {item?.id}
            </div>
            <div>
              <span>Title: </span> {item?.title}
            </div>
            <div>
              <span>Name: </span> {item?.name}
            </div>
            <div>
              <span>Description: </span> {item?.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export function MakeListTwo({
//   thedatatwo: { thedatatwo },
//   dataprops,
//   classliprops,
//   classdivprops,
// }: {
//   thedatatwo: { thedatatwo: DataItem[] };
//   dataprops: string[];
//   classliprops: string;
//   classdivprops: string;
// }) {
//   return (
//     <div className="p-12">
//       <h1 className="flex justify-center underline">
//         This is working: {thedatatwo?.[0]?.name}
//       </h1>
//       <h1 className="flex justify-center underline">
//         Dataprops: {dataprops[0]}
//       </h1>
//       <ul>
//         {thedatatwo.map((item) => (
//           <li key={item.id} className={classliprops}>
//             {dataprops?.length > 0 ? (
//               dataprops?.map((prop: string) => (
//                 <div key={item.id} className={classdivprops}>
//                   <span>{prop}: </span>
//                   <span>{item.[prop]}</span>
//                 </div>
//               ))
//             ) : (
//               <h1>No names found</h1>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// //   const datapropsArray = Array.isArray(dataprops) ? dataprops : [dataprops];
