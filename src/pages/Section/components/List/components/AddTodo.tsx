import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { TbMoneybag } from "react-icons/tb";
import { Todo } from "../../../../../features/todo-slice";

interface Props {
  listIndex: number;
  addNewTodo: (todo: Todo, listIndex: number) => void;
}

const AddTodo = ({ listIndex, addNewTodo }: Props) => {
  const [todo, setTodo] = useState<Todo>({ title: "", details: "" });

  const handleTodo = (e: any) => {
    setTodo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="bg-gray-100 px-3 w-full mb-2 rounded-lg shadow">
      <div className=" flex items-start justify-between w-full  py-3 ">
        <div className="bg-gray-300 w-fit px-2 py-2 rounded-full shadow-lg">
          <TbMoneybag className="text-white w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Add Todo"
          value={todo?.title}
          name="title"
          onChange={handleTodo}
          className="bg-gray-100 outline-none px-1 mx-3 text-lg text-gray-700 w-full placeholder:text-lg"
        />
        <button
          onClick={() => {
            addNewTodo(todo, listIndex);
            setTodo({ title: "", details: "" })
          }}
          className="bg-gray-400 w-fit p-1 rounded-full shadow-lg"
        >
          <TiPlus className="text-white w-6 h-6" />
        </button>
      </div>
      <textarea
        value={todo?.details}
        name="details"
        onChange={handleTodo}
        placeholder="Add Todo Discription"
        className="bg-gray-100 resize-none  w-full px-3 py-1 outline-none"
      />
    </div>
  );
};

export default AddTodo;
