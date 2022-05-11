import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showReactionEmojis: true,
};

const uiSlice = createSlice({
  initialState,
  name: 'ui',
  reducers: {
    showReactionEmojis: (state) => {
      state.showReactionEmojis = true;
    },
    hideReactionEmojis: (state) => {
      state.showReactionEmojis = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
