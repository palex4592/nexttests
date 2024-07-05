import { apidirectussnippet, apidirectussnippettwo } from "@/app/lib/snippets";
import CodeSnippet from "@/app/ui/codesnippets";
import { ButtonNavPrevious } from "@/app/ui/buttonnav";
export default function Home() {
  return (
    <main className="flex-col items-center p-24">
      <h1 className="flex justify-center text-4xl pb-10">DELETE</h1>
      <h1 className="flex justify-center text-3xl">
        Fetch Data from Directus with the API:
      </h1>
      <CodeSnippet code={apidirectussnippet} />
      <p className="flex justify-center">
        Quick explanation of the code and where to put it etc...
      </p>
      <h1 className="flex justify-center text-4xl pt-24">
        Another example with fields and sorting:
      </h1>
      <CodeSnippet code={apidirectussnippettwo} />
      <p className="flex justify-center">
        Quick explanation of the code and where to put it etc...
      </p>
      <div className="flex justify-center">
        <ButtonNavPrevious path={"/docs/directus/update"} text={"Update"} />
      </div>
    </main>
  );
}
