import React, { Dispatch, SetStateAction } from "react";
import ListTitle from "./components/ListTitle";
import AddTodo from "./components/AddTodo";
import TodoDetails from "./components/TodoDetails";
import { Todo, TodoList } from "../../../../features/todo-slice";
import { Edit } from "../../Section";

interface Props {
  index: number;
  list: TodoList;
  openEdit: Edit;
  setOpenEdit: Dispatch<SetStateAction<Edit>>;
  addNewTodo: (todo: Todo, listIndex: number) => void;
}

const List = ({ list, index, openEdit, setOpenEdit ,addNewTodo}: Props) => {
  return (
    <div className="w-full">
      <ListTitle openEdit={openEdit} index={index} title={list?.title} />
      <AddTodo listIndex={index} addNewTodo={addNewTodo}/>
      {list?.list?.map((data: Todo, todoIndex: number) => (
        <TodoDetails
          todoDetails={data}
          todoIndex={todoIndex}
          listIndex={index}
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
        />
      ))}
    </div>
  );
};

export default List;
