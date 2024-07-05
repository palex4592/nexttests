import { ButtonNavNext } from "@/app/ui/buttonnav";
import { Todossupa } from "@/app/ui/todos";

export default async function Page() {
  return (
    <main className="flex text-4xl flex-col items-center justify-between p-24">
      <h1>Supa TODOS PAGE</h1>
      <ButtonNavNext path="/docs/todossupa/create" text="Create" />
      <Todossupa />
    </main>
  );
}
