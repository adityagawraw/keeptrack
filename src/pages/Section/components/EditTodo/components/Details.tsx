import React, { Dispatch, SetStateAction } from "react";
import { Todo } from "../../../../../features/todo-slice";

interface Props {
  todoEditData: Todo;
  setTodoEditData: Dispatch<SetStateAction<Todo>>;
}

const Details = ({ todoEditData, setTodoEditData }: Props) => {
  return (
    <div className="bg-gray-100 px-2 py-1 rounded w-full">
      <textarea
        rows={4}
        value={todoEditData?.details}
        onChange={(e) =>
          setTodoEditData((props) => {
            return { ...props, details: e.target.value };
          })
        }
        className="bg-gray-100 resize-none outline-none px-3 text-gray-600 "
      />
    </div>
  );
};

export default Details;
