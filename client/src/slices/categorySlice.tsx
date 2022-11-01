import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
    categories: string[];
}

const initialState: CategoryState = {
    categories: ["god", "demigod", "creature", "mortal"],
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
