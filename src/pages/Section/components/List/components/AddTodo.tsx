import React from "react";
import { TiPlus } from "react-icons/ti";
import { TbMoneybag } from "react-icons/tb";

const AddTodo = () => {
  return (
    <div className="bg-gray-100 px-3 w-full mb-2 rounded-lg shadow">
      <div className=" flex items-start justify-between w-full  py-3 ">
        <div className="bg-gray-300 w-fit px-2 py-2 rounded-full shadow-lg">
          <TbMoneybag className="text-white w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Add Todo"
          className="bg-gray-100 outline-none px-1 mx-3 text-lg text-gray-700 w-full placeholder:text-lg"
        />
        <div className="bg-gray-400 w-fit p-1 rounded-full shadow-lg">
          <TiPlus className="text-white w-6 h-6" />
        </div>
      </div>
      <textarea
        placeholder="Add Todo Discription"
        className="bg-gray-100 resize-none  w-full px-3 py-1 outline-none"
      />
    </div>
  );
};

export default AddTodo;
