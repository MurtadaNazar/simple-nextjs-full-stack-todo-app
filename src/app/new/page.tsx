import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default function Page() {
  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl">New</h1>
        <Link
          className="px-2 py-1 border rounded outline-none border-slate-300 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700"
          href="/"
        >
          Home
        </Link>
      </header>

      <form action={createTodo} className="flex flex-col gap-2 my-5">
        <label htmlFor="title" className="my-3 text-3xl text-slate-100">
          Todo Title{" "}
        </label>
        <input
          id="title"
          type="text"
          name="title"
          className="px-2 py-1 border rounded outline-none border-slate-300 text-slate-100 bg-slate-700"
        />
        <div className="my-3">
          <button
            type="submit"
            className="px-2 py-1 border rounded outline-none border-slate-300 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}
