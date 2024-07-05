import Link from "next/link";
export default function Home() {
  return (
    <main className="flex-col items-center p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">Welcome to the Directus section.</h1>
        <h1 className="text-2xl p-4">Here's what you can find:</h1>
        <ul>
          <li>
            <Link href="/docs/directus/selfhost" className="hover:underline">
              -How to selfhost a directus database
            </Link>
          </li>
          <li>
            <Link href="/docs/directus/setup" className="hover:underline">
              -How to setup Directus in your project
            </Link>
          </li>
          <li>
            <Link href="/docs/directus/fetch" className="hover:underline">
              -How to fetch data
            </Link>
          </li>
          <li>
            <Link href="/docs/directus/create" className="hover:underline">
              -How to create new data
            </Link>
          </li>
          <li>
            <Link href="/docs/directus/update" className="hover:underline">
              -How to update data
            </Link>
          </li>
          <li>
            <Link href="/docs/directus/delete" className="hover:underline">
              -How to delete data
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
