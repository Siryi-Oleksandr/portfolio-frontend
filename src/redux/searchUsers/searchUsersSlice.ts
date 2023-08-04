import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchUsers, getUserById } from './operations';
import { ISearchState } from 'redux/reduxTypes';
import { IUser } from 'types/userTypes';

const initialState: ISearchState = {
  foundUsers: [],
  userById: {},
  totalCount: 0,
  isLoading: false,
  error: null,
};

const handlePending = (state: ISearchState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: ISearchState, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const searchSlice = createSlice({
  name: 'search/users',
  initialState,
  reducers: {
    resetSearchUsers: state => {
      state.foundUsers = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchUsers.pending, handlePending)
      .addCase(searchUsers.rejected, handleRejected)
      .addCase(getUserById.pending, handlePending)
      .addCase(getUserById.rejected, handleRejected)
      .addCase(
        searchUsers.fulfilled,
        (
          state,
          action: PayloadAction<{ users: IUser[]; totalCount: number }>
        ) => {
          state.foundUsers.push(...action.payload.users);
          state.totalCount = action.payload.totalCount;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(getUserById.fulfilled, (state, action) => {
        state.userById = action.payload;
        state.totalCount = 0;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { resetSearchUsers } = searchSlice.actions;
export default searchSlice.reducer;
