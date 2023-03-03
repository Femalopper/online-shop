import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice.js';
import cartReducer from './cartSlice.js';
import formSlice from './formSlice.js';

export default configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
    form: formSlice,
  },
});
