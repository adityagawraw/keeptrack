import React from "react";
import { useAppSelector } from "../../features/hooks";

const Navbar = () => {
  const  todoData = useAppSelector((state)=> state.todo)
  return (
    <div className="w-full px-4 py-3 flex justify-between border-b-2 border-gray-400">
      <p className="text-xl font-semibold text-gray-700 ml-5">{todoData?.title}</p>
      <div>details</div>
    </div>
  );
};

export default Navbar;
