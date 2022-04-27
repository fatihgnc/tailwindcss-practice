import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'fatihthebach',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
