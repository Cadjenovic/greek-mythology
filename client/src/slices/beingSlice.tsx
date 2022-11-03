import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
    categories: string[];
}

const initialState: CategoryState = {
    categories: ["god", "demigod", "creature", "mortal"],
};

export const beingSlice = createSlice({
    name: "being",
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
    },
});

export const {} = beingSlice.actions;

export default beingSlice.reducer;
