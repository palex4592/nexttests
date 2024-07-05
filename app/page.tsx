import { ButtonNavNext } from "./ui/buttonnav";
import { redirect } from "next/navigation";
export default async function Page() {
  // redirect("/docs");
  return (
    <main className="flex flex-col items-center justify-center text-4xl p-24">
      <h1>Welcome Home</h1>
      <ButtonNavNext path="/docs" text="Docs" />
    </main>
  );
}
