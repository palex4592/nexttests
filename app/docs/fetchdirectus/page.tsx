import DirectusData from "@/app/ui/fetchdirectus";
export default async function Page() {
  return (
    <main className="flex text-4xl flex-col items-center justify-between p-24">
      <h1>Fetch Directus Page</h1>
      <DirectusData />
    </main>
  );
}
