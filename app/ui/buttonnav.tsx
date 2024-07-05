import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";

export function UpdateTodo({ id }: { id: string | number }) {
  return (
    <Link href={`/docs/todos/${id}/edit`} className="shared-button-styles">
      <PencilIcon className="w-5 h-5" />
    </Link>
  );
}
export function UpdateTodoSupa({ id }: { id: string | number }) {
  return (
    <Link href={`/docs/todossupa/${id}/edit`} className="shared-button-styles">
      <PencilIcon className="w-5 h-5" />
    </Link>
  );
}

export function ButtonNavNext({ path, text }: { path: string; text: string }) {
  return (
    <div className="p-24">
      <Link
        href={path}
        className="w-64 h-20 flex items-center justify-center gap-5 rounded-sm bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span className="text-3xl">{text}</span>
        <ArrowRightIcon className="w-12" />
      </Link>
    </div>
  );
}
export function ButtonNavPrevious({
  path,
  text,
}: {
  path: string;
  text: string;
}) {
  return (
    <div className="p-24">
      <Link
        href={path}
        className="w-64 h-20 flex items-center justify-center gap-5 rounded-sm bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <ArrowLeftIcon className="w-12" />
        <span className="text-3xl">{text}</span>
      </Link>
    </div>
  );
}
