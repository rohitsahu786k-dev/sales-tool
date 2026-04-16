import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    childItem: [],
    currentIndex: 0,
    disableNext: false,
    childImage: ''
}

export const WheelItemSlice = createSlice({
    name: 'wheel-child',
    initialState,
    reducers: {
        updateChildItem: (state, action) => {
            return {
                ...state,
                childItem: action.payload
            };
        },
        updateDisplayImage: (state, action) => {
            return {
                ...state,
                childImage: action.payload
            };
        },
        setNext: (state) => {
            let dnext = false
            let cindex = state.currentIndex
            if (state.currentIndex >= (state.childItem.length - 1)) {
                dnext = true
            } else if (state.currentIndex < state.childItem.length) {
                cindex = state.currentIndex + 1
                dnext = (cindex == (state.childItem.length - 1))
            }
            return {
                ...state,
                currentIndex: cindex,
                disableNext: dnext
            };
        },
        resetChild: (state) => {
            return {
                ...state,
                currentIndex: 0,
                disableNext: false,
                childItem: []
            };
        },
        setDisableNext: (state, action) => {
            return {
                ...state,
                disableNext: action.payload
            };
        },
    }
})

export const { updateChildItem, setNext, resetChild, updateDisplayImage, setDisableNext } = WheelItemSlice.actions

export default WheelItemSlice.reducer;

