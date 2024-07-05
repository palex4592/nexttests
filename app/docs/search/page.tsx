import Search from "@/app/ui/search";
export default function Page() {
  return (
    <main className="flex text-4xl flex-col items-center justify-between p-24">
      <h1 className="p-24">Search Homepage</h1>
      <Search placeholder={"search..."} />
    </main>
  );
}
