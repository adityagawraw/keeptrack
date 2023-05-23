import React, { useEffect, useState } from "react";
import AddList from "./components/AddList";
import List from "./components/List/List";
import EditTodo from "./components/EditTodo/EditTodo";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Section.module.css";
import { useAppSelector } from "../../features/hooks";
import { Sections, Todo, TodoList } from "../../features/todo-slice";

export interface Edit {
  open: boolean;
  listIndex: number;
  todoIndex: number;
  todo: Todo;
}

const Section = () => {
  const [openEdit, setOpenEdit] = useState<Edit>({
    open: false,
    listIndex: 0,
    todoIndex: 0,
    todo: {
      title:"",
      details:""
    }
  });

  const data = useAppSelector((state) => state.todo);
  const [todoData, setTodoData] = useState<Sections>(data);

  useEffect(() => {
    console.log(openEdit);
  }, [openEdit]);

  return (
    <div className="">
      <Navbar />
      <div
        className={`grid  ${
          openEdit?.open ? `grid-cols-[3fr_1fr]` : `grid-cols-[3fr]`
        } h-[calc(100vh-54px)]`}
      >
        <div
          className={`${styles.listSection} w-full overflow-auto grid grid-cols-[1fr_1fr_1fr]  gap-2 py-2 px-2`}
        >
          <AddList />
          {todoData?.list?.map((data: TodoList, index: number) => (
            <List
              key={index}
              index={index}
              list={data}
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
            />
          ))}
        </div>
        <EditTodo openEdit={openEdit} setOpenEdit={setOpenEdit} />
      </div>
    </div>
  );
};

export default Section;
