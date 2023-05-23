import React, { Dispatch, SetStateAction } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import { Todo } from "../../../../../features/todo-slice";
import { Edit } from "../../../Section";

interface Props {
  todoDetails: Todo;
  todoIndex: number;
  listIndex: number;
  openEdit: Edit;
  setOpenEdit: Dispatch<SetStateAction<Edit>>;
}

const TodoDetails = ({
  todoDetails,
  todoIndex,
  listIndex,
  openEdit,
  setOpenEdit,
}: Props) => {
  return (
    <div
      className={` ${
        openEdit?.listIndex == listIndex &&
        openEdit?.todoIndex == todoIndex &&
        `border-l-4 border-r-4 border-blue-500`
      } bg-gray-100 w-full mb-2 min-h-[130px] rounded-lg shadow`}
    >
      <div className=" flex items-start justify-between w-full px-2 py-3 ">
        <div className="bg-gray-300 w-fit px-2 py-2 rounded-full shadow-lg">
          <TbMoneybag className="text-white w-4 h-4" />
        </div>
        <p className="bg-gray-100 px-1 mr-3 text-lg text-gray-700 w-full ">
          {todoDetails?.title}
        </p>
        <button
          onClick={() => {
            setOpenEdit((props) => {
              return {
                open: true,
                listIndex: listIndex,
                todoIndex: todoIndex,
                todo: todoDetails,
              };
            });
          }}
          className="bg-gray-400 w-fit px-2 py-2 rounded-full shadow-lg"
        >
          <BsFillPencilFill className="text-white w-4 h-4" />
        </button>
      </div>
      <p className="bg-gray-100 w-full px-2 py-1 ">{todoDetails?.details}</p>
    </div>
  );
};

export default TodoDetails;
