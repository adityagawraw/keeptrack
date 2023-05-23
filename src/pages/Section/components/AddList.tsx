import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddList = () => {
  return (
    <div className="flex justify-between bg-gray-300 w-full h-fit p-2 placeholder:text-white rounded-lg shadow">
      <input
        type="text"
        placeholder="Add Todo-List"
        className="text-xl bg-gray-300 outline-none px-1 mr-3 text-gray-700 font-semibold w-full"
      />
      <div className="bg-gray-400 w-fit p-1 rounded-full shadow-lg">
        <AiOutlinePlus className="text-white w-5 h-5" />
      </div>
    </div>
  );
};

export default AddList;
