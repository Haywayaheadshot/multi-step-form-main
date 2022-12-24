import { configureStore } from '@reduxjs/toolkit';
import planReducer from './confirmOrder/ConfirmOrder';
import addOnsReducer from './addOns/AddOns';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    plans: planReducer,
    addOns: addOnsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
