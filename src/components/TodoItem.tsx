"use client";
import { useRouter } from "next/navigation";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  const router = useRouter();

  return (
    <li className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        className="scale-125 cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />

      <label
        htmlFor={id}
        className="my-2 text-2xl cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}{" "}
      </label>

      <button
        className="px-2 py-1 ml-6 text-sm border border-red-500 rounded outline-none text-slate-300 hover:bg-red-700"
        onClick={() => [deleteTodo(id), router.refresh()]}
      >
        Delete
      </button>
    </li>
  );
}
