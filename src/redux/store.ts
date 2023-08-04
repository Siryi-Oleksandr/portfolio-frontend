import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { persistedAuthReducer } from './auth/authSlice';
import searchSliceReducer from './searchUsers/searchUsersSlice';
import projectSliceReducer from './project/projectSlice';
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    search: searchSliceReducer,
    projects: projectSliceReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
