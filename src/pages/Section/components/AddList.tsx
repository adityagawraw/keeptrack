import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TodoList } from "../../../features/todo-slice";

interface Props {
  addList: (addList: TodoList) => void;
}

const AddList = ({ addList }: Props) => {
  const [todoList, setTodoList] = useState<TodoList>({ title: "", list: [] });
  return (
    <div className="flex justify-between bg-gray-200 w-full h-fit p-2 placeholder:text-white rounded-lg shadow">
      <input
        type="text"
        placeholder="Add Todo-List"
        value={todoList?.title}
        onChange={(e) => {
          setTodoList({ title: e.target.value, list: [] });
        }}
        className="text-xl bg-gray-200 outline-none px-1 mr-3 text-gray-700 font-semibold w-full"
      />
      <button
        onClick={() => {
          addList(todoList);
          setTodoList({ title: "", list: [] });
        }}
        className="bg-gray-400 w-fit p-1 rounded-full shadow-lg"
      >
        <AiOutlinePlus className="text-white w-5 h-5" />
      </button>
    </div>
  );
};

export default AddList;
