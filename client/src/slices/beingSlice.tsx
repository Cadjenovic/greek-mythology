import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
    categories: string[];
    beings: any[];
}

const initialState: CategoryState = {
    categories: ["god", "demigod", "creature", "mortal"],
    beings: [],
};

export const beingSlice = createSlice({
    name: "being",
    initialState,
    reducers: {
        setBeings: (state, action: PayloadAction<any[]>) => {
            state.beings = action.payload;
        },
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
    },
});

export const { setCategories, setBeings } = beingSlice.actions;

export default beingSlice.reducer;
