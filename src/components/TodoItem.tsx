"use client";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};
export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
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
    </li>
  );
}
