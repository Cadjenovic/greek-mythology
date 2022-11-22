import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IBeing from "../interfaces/IBeing";

export interface BeingState {
    beings: IBeing[];
    selectedBeing: IBeing | null;
    loading: boolean;
}

const initialState: BeingState = {
    beings: [],
    selectedBeing: null,
    loading: false,
};

export const beingSlice = createSlice({
    name: "being",
    initialState,
    reducers: {
        setBeings: (state, action: PayloadAction<IBeing[]>) => {
            state.beings = action.payload;
        },
        setSelectedBeing: (state, action: PayloadAction<IBeing>) => {
            state.selectedBeing = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setBeings, setSelectedBeing, setLoading } = beingSlice.actions;

export default beingSlice.reducer;
