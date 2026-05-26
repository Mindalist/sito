import { configureStore } from "@reduxjs/toolkit";
import { instagramApi } from "./api/instagramApi";

export const store = configureStore({
  reducer: {
    [instagramApi.reducerPath]: instagramApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(instagramApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;









