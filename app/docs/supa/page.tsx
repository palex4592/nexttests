import Link from "next/link";
export default function Home() {
  return (
    <main className="flex-col items-center p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">Welcome to the Supa section.</h1>
        <h1 className="text-2xl p-4">Here's what you can find:</h1>
        <ul>
          <li>
            <Link href="/docs/supa/selfhost" className="hover:underline">
              -How to setup a Supa database
            </Link>
          </li>
          <li>
            <Link href="/docs/supa/setup" className="hover:underline">
              -How to setup Supa in your project
            </Link>
          </li>
          <li>
            <Link href="/docs/supa/fetch" className="hover:underline">
              -How to fetch data
            </Link>
          </li>
          <li>
            <Link href="/docs/supa/create" className="hover:underline">
              -How to create new data
            </Link>
          </li>
          <li>
            <Link href="/docs/supa/update" className="hover:underline">
              -How to update data
            </Link>
          </li>
          <li>
            <Link href="/docs/supa/delete" className="hover:underline">
              -How to delete data
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
