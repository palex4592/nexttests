import Link from "next/link";
import { AccordionItem } from "./accordion";
import { SideNavLinks } from "../lib/links";

export function ButtonSideNavTwo() {
  const sortLinksByPrio = () => {
    return SideNavLinks.sort((a, b) => {
      if (a.prio !== undefined && b.prio !== undefined) {
        return a.prio - b.prio;
      }
      if (a.prio !== undefined) return -1;
      if (b.prio !== undefined) return 1;
      return 0;
    });
  };
  sortLinksByPrio();
  return (
    <div className="text-sm h-screen flex flex-col w-64 gap-5 p-4 overflow-auto">
      <ul>
        {SideNavLinks?.map((item) => (
          <div key={item.link}>
            {item.accordion ? (
              <li className="py-3 ml-4">
                <AccordionItem list={item} />
              </li>
            ) : (
              <li className="py-3 ml-4">
                <Link
                  href={item.link}
                  className="items-center gap-2 py-3 text-lg font-medium hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
