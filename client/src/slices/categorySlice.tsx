import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllCategories } from "../data";

export interface CategoryState {
    categories: string[];
}

const initialState: CategoryState = {
    categories: getAllCategories(),
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
    },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
