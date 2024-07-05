"use client";
import { useFormState } from "react-dom";
import {
  createTodo,
  updateTodo,
  createTodoSupa,
  updateTodoSupa,
} from "../lib/actions";
import React, { useState } from "react";
import { TableType } from "../lib/definitions";
import { ThemedInput, ThemedTextarea } from "../styles/globalStyles";

export function EditFormSupa({ todo }: { todo: TableType }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const id = todo.id;
  const title = todo.title;
  const description = todo.description;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsButtonDisabled(true);
    const formData = new FormData(event.currentTarget);
    try {
      await updateTodoSupa(id, formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <h2>Title</h2>
        <ThemedInput name="title" defaultValue={title} required />
        <h2>Description</h2>
        <ThemedTextarea
          name="description"
          className="text-lg"
          defaultValue={description}
          required
        />
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          type="submit"
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
}
export function EditForm({ todo }: { todo: TableType }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const id = todo.id;
  const title = todo.title;
  const description = todo.description;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsButtonDisabled(true);
    const formData = new FormData(event.currentTarget);
    try {
      await updateTodo(id, formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <h2>Title</h2>
        <ThemedInput name="title" defaultValue={title} required />
        <h2>Description</h2>
        <ThemedTextarea
          name="description"
          className="text-lg"
          defaultValue={description}
          required
        />
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          type="submit"
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
}
export default function Form() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsButtonDisabled(true);
    const formData = new FormData(event.currentTarget);
    try {
      await createTodo(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <h2>Title</h2>
        <ThemedInput name="title" required />
        <h2>Description</h2>
        <ThemedTextarea name="description" className="text-lg" required />
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          type="submit"
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? "Creating..." : "Create"}
        </button>
      </div>
    </form>
  );
}

export function FormSupa() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsButtonDisabled(true);
    const formData = new FormData(event.currentTarget);
    try {
      await createTodoSupa(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <h2>Title</h2>
        <ThemedInput name="title" required />
        <h2>Description</h2>
        <ThemedTextarea name="description" className="text-lg" required />
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          type="submit"
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? "Creating..." : "Create"}
        </button>
      </div>
    </form>
  );
}
