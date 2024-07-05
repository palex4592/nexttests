"use client";
import { deleteTodo, deleteTodoSupa } from "../lib/actions";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function DeleteTodo({ id }: { id: string | number }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  const handleDelete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      deleteTodoWithId();
    }
  };
  return (
    <form onSubmit={handleDelete}>
      <button className="shared-button-styles">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 h-5" />
      </button>
    </form>
  );
}
export function DeleteTodoSupa({ id }: { id: string | number }) {
  const deleteTodoWithId = deleteTodoSupa.bind(null, id);
  const handleDelete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      deleteTodoWithId();
    }
  };
  return (
    <form onSubmit={handleDelete}>
      <button className="shared-button-styles">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 h-5" />
      </button>
    </form>
  );
}

export default function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log(newCount);
      return newCount;
    });
  };

  const handleClickReset = () => {
    setCount((prevCount) => {
      const newCount = prevCount * 0;
      console.log(newCount);
      return newCount;
    });
  };

  return (
    <div className="flex text-4xl flex-col items-center justify-between p-24">
      <button
        onClick={handleClick}
        className="bg-sky-400 hover:bg-sky-700 text-white rounded-2xl px-3 py-2"
      >
        Click!
      </button>
      <h1 className="py-14">{count}</h1>
      <button
        onClick={handleClickReset}
        className="bg-sky-400 hover:bg-sky-700 text-white rounded-2xl px-3 py-2"
      >
        Reset
      </button>
    </div>
  );
}
