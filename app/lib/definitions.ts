import { z } from "zod";

export type TopNavType = {
  link: string;
  text: string;
};

type AccordionItem = {
  name: string;
  link: string;
};

export type SideNavLink = {
  name: string;
  link: string;
  prio?: number;
  accordion?: AccordionItem[];
};
export type TheList = {
  name: string;
  link: string;
  prio?: number;
  accordion?: {
    name: string;
    link: string;
  }[];
};
export type TableType = {
  id: string | number;
  name: string;
  title: string;
  description: string;
};

export type TableTypeArray = TableType[];

export type First = {
  id: string | number;
  name: string;
  title: string;
}[];

export type Global = {
  id: number;
  description: string;
  title: string;
};

export type SupaTable = {
  id: number;
  name: string;
  title: string;
  description: string;
}[];

const singlefirstSupaSchema = z.object({
  id: z.number().optional(),
  created_at: z.string().optional(),
  name: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
});
export const firstSupaSchema = z.array(singlefirstSupaSchema);

const IdSchema = z.union([z.string(), z.number()]);

const getFirstTableSchemaSingle = z.object({
  id: IdSchema.optional(),
  title: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
});

export const getFirstTableSchema = z.array(getFirstTableSchemaSingle);
