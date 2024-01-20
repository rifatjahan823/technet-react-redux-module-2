import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import productSlice from './features/products/productSlice'
import { api } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    productSlice:productSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch