import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import messageReducer from './message';
import uiReducer from './ui';

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    ui: uiReducer,
  },
});

export default store;
