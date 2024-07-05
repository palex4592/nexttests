import { ButtonNavNext } from "../ui/buttonnav";

export default function Page() {
  return (
    <main className="flex text-4xl flex-col items-center justify-between p-24">
      <h1>Login page.</h1>
      <ButtonNavNext path="/docs" text="Docs" />
    </main>
  );
}
