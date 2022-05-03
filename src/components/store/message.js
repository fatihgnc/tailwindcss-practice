import { createSlice } from '@reduxjs/toolkit';

const getCurrentTime = () => new Date().toLocaleTimeString().slice(0, -3);
const initialState = {
  messages: [
    {
      id: Date.now(),
      sender: 'fatih',
      sendingDate: getCurrentTime(),
      messageContent: 'Merhabalar!',
      messageEmotes: [],
    },
    {
      id: Date.now() + 1,
      sender: 'fatih',
      sendingDate: getCurrentTime(),
      messageContent:
        "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      messageEmotes: [],
    },
  ],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      action.payload.sendingDate = getCurrentTime();
      state.messages.push(action.payload);
    },
  },
});

export const messageActions = messageSlice.actions;
export default messageSlice.reducer;
