import { ButtonNavNext } from "../ui/buttonnav";
export default async function Page() {
  return (
    <main className="flex flex-col items-center justify-center text-4xl p-24">
      <h1>Welcome Home</h1>
      <ButtonNavNext path="/docs" text="Docs" />
    </main>
  );
}
