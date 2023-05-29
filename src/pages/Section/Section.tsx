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
    listIndex: -1,
    todoIndex: -1,
    todo: {
      title: "",
      details: "",
    },
  });

  const data = useAppSelector((state) => state.todo);
  const [todoData, setTodoData] = useState<Sections>(data);

  useEffect(() => {
    console.log(todoData);
  }, [todoData]);

  const addNewTodo = (todo: Todo, listIndex: number) => {
    setTodoData((prev) => {
      let listsArr = prev?.list?.[listIndex]?.list;
      console.log(listsArr);
      listsArr = [todo, ...listsArr];
      const listObj = {
        title: prev?.list?.[listIndex]?.title,
        list: listsArr,
      };
      const listArr = prev?.list?.map((data: TodoList, index: number) => {
        if (index == listIndex) return listObj;
        return data;
      });
      return { title: prev?.title, list: listArr };
    });
  };

  const editTodo = (todo: Todo, listIndex: number, todoIndex: number) => {
    setTodoData((prev) => {
      let todoArr = prev?.list?.[listIndex]?.list?.map(
        (data: Todo, index: number) => {
          if (index == todoIndex) return todo;
          return data;
        }
      );
      let todolist = {
        title: prev?.list?.[listIndex]?.title,
        list: todoArr,
      };
      let listArr = prev?.list?.map((data: TodoList, index: number) => {
        if (index == listIndex) return todolist;
        return data;
      });
      return { title: prev?.title, list: listArr };
    });
  };

  const addList = (listData: TodoList) => {
    setTodoData((prev) => {
      return { title: prev?.title, list: [listData, ...prev?.list] };
    });
  };

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
          <AddList addList={addList} />
          {todoData?.list?.map((data: TodoList, index: number) => (
            <List
              key={index}
              index={index}
              list={data}
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              addNewTodo={addNewTodo}
            />
          ))}
        </div>
        <EditTodo
          editTodo={editTodo}
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
        />
      </div>
    </div>
  );
};

export default Section;
