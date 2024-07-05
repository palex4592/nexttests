import { TheList, TopNavType } from "./definitions";

export const TopNavLinks: TopNavType[] = [
  {
    link: "/home",
    text: "Home",
  },
  {
    link: "/docs",
    text: "Docs",
  },
  {
    link: "/login",
    text: "Login",
  },
];
export const SideNavLinks: TheList[] = [
  {
    name: "Directus",
    link: "/docs/directus",
    prio: 10,
    accordion: [
      {
        name: "Selfhost",
        link: "/docs/directus/selfhost",
      },
      {
        name: "Setup",
        link: "/docs/directus/setup",
      },
      {
        name: "Fetch",
        link: "/docs/directus/fetch",
      },
      {
        name: "Create",
        link: "/docs/directus/create",
      },
      {
        name: "Update",
        link: "/docs/directus/update",
      },
      {
        name: "Delete",
        link: "/docs/directus/delete",
      },
    ],
  },
  {
    name: "Tests",
    link: "/docs/alldata",
    prio: 80,
    accordion: [
      {
        name: "All Data",
        link: "/docs/alldata",
      },
      {
        name: "Fetch Directus",
        link: "/docs/fetchdirectus",
      },
      {
        name: "Fetch Supa",
        link: "/docs/fetchsupa",
      },
    ],
  },
  {
    name: "Todos Directus",
    link: "/docs/todos",
    prio: 10,
  },
  {
    name: "Todos Supa",
    link: "/docs/todossupa",
    prio: 10,
  },
  {
    name: "Supa",
    link: "/docs/supa",
    prio: 9,
    accordion: [
      {
        name: "Selfhost",
        link: "/docs/supa/selfhost",
      },
      {
        name: "Setup",
        link: "/docs/supa/setup",
      },
      {
        name: "Fetch",
        link: "/docs/supa/fetch",
      },
      {
        name: "Create",
        link: "/docs/supa/create",
      },
      {
        name: "Update",
        link: "/docs/supa/update",
      },
      {
        name: "Delete",
        link: "/docs/supa/delete",
      },
    ],
  },
  {
    name: "Button CSR",
    link: "/docs/button",
    prio: 50,
  },
  {
    name: "Search",
    link: "/docs/search",
    prio: 70,
  },
];

export const alllinks = [
  {
    link: "/docs/directus",
    text: "Directus",
    tags: ["directus", "guide", "setup"],
  },
  {
    link: "/docs/fetchdirectus",
    text: "Fetch Directus",
    tags: ["fetch", "get", "directus"],
  },
  {
    link: "/docs/fetchsupa",
    text: "Fetch Supa",
    tags: ["fetch", "get", "supa"],
  },
  {
    link: "/docs/alldata",
    text: "All Data",
    tags: [
      "fetch",
      "get",
      "supa",
      "directus",
      "all data",
      "getAnything",
      "get anything",
    ],
  },
  {
    link: "/docs/todos",
    text: "Todos",
    tags: ["todos", "todo"],
  },
  {
    link: "/docs/buttonnav",
    text: "Button Nav",
    tags: ["button", "navigation"],
  },
  {
    link: "/docs/button",
    text: "Button CSR",
    tags: ["button"],
  },
  {
    link: "/docs/search",
    text: "Search",
    tags: ["search"],
  },
];
type AllLinksType = {
  link: string;
  text: string;
  tags: string[];
};
export const FilteredAllLinks = (linkque: string) => {
  const filteredLinks: string[] = [];
  if (linkque) {
    SideNavLinks.forEach((item) => {
      // Check the main item
      if (
        item.name.toLowerCase().includes(linkque.toLowerCase()) &&
        !filteredLinks.includes(item.link)
      ) {
        filteredLinks.push(item.link);
      }
      if (
        item.link.toLowerCase().includes(linkque.toLowerCase()) &&
        !filteredLinks.includes(item.link)
      ) {
        filteredLinks.push(item.link);
      }

      // Check accordion items if they exist
      if (item.accordion) {
        item.accordion.forEach((accordionItem) => {
          if (
            accordionItem.name.toLowerCase().includes(linkque.toLowerCase()) &&
            !filteredLinks.includes(accordionItem.link)
          ) {
            filteredLinks.push(accordionItem.link);
          }
          if (
            item.link.toLowerCase().includes(linkque.toLowerCase()) &&
            !filteredLinks.includes(accordionItem.link)
          ) {
            filteredLinks.push(accordionItem.link);
          }
        });
      }
    });
  }
  return filteredLinks;
};
