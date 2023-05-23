import React, { Dispatch, SetStateAction } from "react";
import { Todo } from "../../../../../features/todo-slice";

interface Props {
  todoEditData: Todo;
  setTodoEditData: Dispatch<SetStateAction<Todo>>;
}
const Title = ({ todoEditData, setTodoEditData }: Props) => {
  return (
    <div className="bg-gray-100 px-2 py-1 rounded w-full mb-2">
      <input
        type="text"
        value={todoEditData?.title}
        onChange ={(e)=>setTodoEditData(props=>{
          return {...props, title:e.target.value }
        })}
        className="bg-gray-100 px-2 py-1 outline-none text-gray-700 text-xl font-semibold"
      />
    </div>
  );
};

export default Title;
