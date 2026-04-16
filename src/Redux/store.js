import { configureStore } from '@reduxjs/toolkit';
import WheelItemReducer from './wheel-item/wheel-item-slice';
import deskReducer from './desk-list/desk-slice';
import productInfoReducer from './product-info/product-slice';

export const store = configureStore({
    reducer: {
        wheelItem: WheelItemReducer,
        desk: deskReducer,
        product: productInfoReducer
    }
})
