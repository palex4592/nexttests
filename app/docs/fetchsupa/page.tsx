import SupaData from "@/app/ui/fetchsupa";
export default async function Page() {
  return (
    <main className="flex text-4xl flex-col items-center justify-between p-24">
      <h1>Fetch Supa Page</h1>
      <SupaData />
    </main>
  );
}
