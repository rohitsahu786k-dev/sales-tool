import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wheelIndex: 0,
    displayImage: false
}

export const productInfoSlice = createSlice({
    name: 'product-info',
    initialState,
    reducers: {
        setWheelIndex: (state, action) => {
            state.wheelIndex = action.payload
        },
        setDisplayImage: (state, action) => {
            state.displayImage = action.payload
        }
    }
})

export const { setWheelIndex, setDisplayImage } = productInfoSlice.actions

export default productInfoSlice.reducer;
