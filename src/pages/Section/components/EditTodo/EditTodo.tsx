import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Title from "./components/Title";
import Details from "./components/Details";
import { HiArrowNarrowLeft } from "react-icons/hi";
import styles from "./Edit.module.css";
import { Edit } from "../../Section";
import { Todo } from "../../../../features/todo-slice";

interface Props {
  openEdit: Edit;
  setOpenEdit: Dispatch<SetStateAction<Edit>>;
  editTodo: (todo: Todo, listIndex: number, todoIndex: number) => void;
}

const EditTodo = ({ openEdit, setOpenEdit, editTodo }: Props) => {
  const [todoEditData, setTodoEditData] = useState<Todo>(openEdit?.todo);
  useEffect(() => {
    setTodoEditData(openEdit?.todo);
  }, [openEdit]);
  return (
    <div
      className={`${styles.editSection} ${
        openEdit?.open ? `block ` : `hidden`
      }`}
    >
      <button className="font-semibold flex gap-4 items-center text-lg text-gray-700 mt-2 mb-4">
        <HiArrowNarrowLeft /> <span> Edit Todo</span>
      </button>
      <Title todoEditData={todoEditData} setTodoEditData={setTodoEditData} />
      <Details todoEditData={todoEditData} setTodoEditData={setTodoEditData} />
      <button
        onClick={() => {
          editTodo(todoEditData, openEdit?.listIndex, openEdit?.todoIndex);
          setOpenEdit({
            open: false,
            listIndex: -1,
            todoIndex: -1,
            todo: {
              title: "",
              details: "",
            },
          });
        }}
        className="bg-blue-500 text-white py-1 px-2 rounded my-2 w-full text-lg"
      >
        Save
      </button>
    </div>
  );
};

export default EditTodo;
