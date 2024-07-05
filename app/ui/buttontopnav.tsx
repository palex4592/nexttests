import Link from "next/link";
import ThemeToggle from "./themetoggle";
import { SearchComponent } from "./search";
import { TopNavLinks } from "../lib/links";
export function ButtonTopNavTwo() {
  return (
    <div className="flex gap-5 p-4 justify-center items-center">
      <div className="flex flex-row">
        <ul className="flex flex-row">
          {TopNavLinks?.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className=" items-center gap-2 px-3 text-lg font-medium hover:underline"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <SearchComponent />
        </div>
      </div>
      <div className="justify-between">
        <ThemeToggle />
      </div>
    </div>
  );
}
