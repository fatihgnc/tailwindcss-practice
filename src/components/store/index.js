import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import messageReducer from './message';

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export default store;
