import { Anything } from "@/app/ui/alldata";
export default async function DynamicPage() {
  return (
    <main className="flex text-4xl flex-col items-center justify-between p-24">
      <h1 className="pb-12">TESTING GETANYTHING FUNCTION</h1>
      <Anything />
    </main>
  );
}
