import { configureStore } from "@reduxjs/toolkit";
import beingReducer from "./slices/beingSlice";
import categoryReducer from "./slices/categoriesSlice";

export const store = configureStore({
    reducer: {
        beings: beingReducer,
        categories: categoryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
