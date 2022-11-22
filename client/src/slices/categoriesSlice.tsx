import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
    categories: string[];
    selectedCategory: string;
}

const initialState: CategoryState = {
    categories: ["god", "demigod", "titan", "creature", "mortal"],
    selectedCategory: "",
};

export const categorySlice = createSlice({
    name: "being",
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
        setSelectedCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setCategories, setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
