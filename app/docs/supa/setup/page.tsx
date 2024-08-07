import { apisupasnippet, fetchsupasnippet } from "@/app/lib/snippets";
import CodeSnippet from "@/app/ui/codesnippets";
import { ButtonNavPrevious, ButtonNavNext } from "@/app/ui/buttonnav";
export default function Home() {
  return (
    <main className="flex-col items-center p-24">
      <h1 className="flex justify-center text-4xl pb-10">SETUP</h1>
      <h1 className="flex justify-center text-3xl">
        Fetch Data from Supa with the API:
      </h1>
      <CodeSnippet code={fetchsupasnippet} />
      <p className="flex justify-center">
        Quick explanation of the code and where to put it etc...
      </p>
      <h1 className="flex justify-center text-4xl pt-24">
        Another example with fields and sorting:
      </h1>
      <CodeSnippet code={apisupasnippet} />
      <p className="flex justify-center">
        Quick explanation of the code and where to put it etc...
      </p>
      <div className="flex justify-center">
        <ButtonNavPrevious path={"/docs/supa/selfhost"} text={"Selfhost"} />
        <ButtonNavNext path={"/docs/supa/fetch"} text={"Fetch"} />
      </div>
    </main>
  );
}
