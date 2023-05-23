import { createSlice } from "@reduxjs/toolkit";
export interface Todo{
    title:string;
    details:string;
}

export interface TodoList {
    title : string;
    list : Todo[];
}

export interface Sections {
title : string;
list : TodoList[];
}
 
const initialState: Sections = {
    title: "Section 2",
    list: [
      {
        title: "Grocery List ",
        list: [
          {
            title: "Carrot",
            details:
              " Carrots good for eyes. contains vitamin A and beta-carotene",
          },
          {
            title: "fish",
            details: "GEt fish from market",
          },
        ],
      },
      {
        title: "Study subjects ",
        list: [
          {
            title: "Relational algebra ",
            details: "Data base management procedural ",
          },
          {
            title: "tuples Calculas",
            details: "Non-procedural",
          },
        ],
      },
    ],
  };

const todoSlice = createSlice({
    name:"todo",
    initialState: initialState,
    reducers : {
        getTodoData : (state , action )=>{
            state = action.payload;
        }
    }
});

export const {getTodoData } = todoSlice.actions;
export default todoSlice.reducer;