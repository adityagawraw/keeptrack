import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";

 const store = configureStore({
    reducer:{
        todo: todoSlice
    }
 });
 export default store ;
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch
