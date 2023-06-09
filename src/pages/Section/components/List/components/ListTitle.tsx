import React from "react";
import { Edit } from "../../../Section";
import styles from "../List.module.css";

interface Props {
  openEdit: Edit;
  index: number;
  title: string;
}

const ListTitle = ({ openEdit, title, index }: Props) => {
  console.log(index);
  return (
    <div className="mb-2 min-h-[50px]">
      <div
        className={`${
          openEdit?.listIndex == index &&
          `border-2 rounded-none border-green-500`
        } px-3 py-2 rounded bg-gray-100 shadow`}
      >
        <p className="text-xl text-gray-600  w-fit">
          List {index + 1} : {title}
        </p>
      </div>
    </div>
  );
};

export default ListTitle;
