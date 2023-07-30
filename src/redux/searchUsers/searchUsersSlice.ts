import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchUsers } from './operations';
import { ISearchState } from 'redux/reduxTypes';
import { IUser } from 'types/userTypes';

const initialState: ISearchState = {
  foundUsers: [],
  isLoading: false,
  error: null,
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
      .addCase(searchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        searchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.foundUsers.push(...action.payload);
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(searchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const { actions } = searchSlice;
export default searchSlice.reducer;
