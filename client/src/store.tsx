import { configureStore } from "@reduxjs/toolkit";
import beingReducer from "./slices/beingSlice";

export const store = configureStore({
    reducer: {
        beings: beingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
