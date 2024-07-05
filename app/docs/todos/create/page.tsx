import Form from "@/app/ui/form";
import { ButtonNavPrevious } from "@/app/ui/buttonnav";

export default async function Page() {
  return (
    <main className="align-middle flex text-4xl flex-col items-center justify-center h-screen p-24">
      <h1>CREATE TODOS PAGE</h1>
      <Form />
      <ButtonNavPrevious path="/docs/todos" text="Todos" />
    </main>
  );
}
