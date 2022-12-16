import { configureStore } from '@reduxjs/toolkit';
import planReducer from './confirmOrder/ConfirmOrder';

const store = configureStore({
  reducer: {
    plans: planReducer,
  },
});

export default store;
