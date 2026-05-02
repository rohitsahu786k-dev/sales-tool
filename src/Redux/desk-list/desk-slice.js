import { createSlice } from "@reduxjs/toolkit"

import { deskList } from "../data/desk"

const initialState = {
    list: deskList,
    activeDesk: 0,
    activeDeskInfo: deskList.find((desk) => desk.id === 0),
    disableAllMenu: false,
    disableAllMenuDeskIds: [99,100],
}

export const deskSlice = createSlice({
    name: 'desk-list',
    initialState,
    reducers: {
        setActiveDesk: (state, action) => {
            const nextDesk = deskList.find((desk) => desk.id === action.payload);

            return {
                ...state,
                activeDeskInfo: {
                    ...nextDesk,
                    activeLongDescription: nextDesk.longDescription
                },
                activeDesk: action.payload,
                disableAllMenu: state.disableAllMenuDeskIds.includes(action.payload)
            }
        },
        setActiveColor: (state, action) => {
            state.activeDeskInfo.activeColor = action.payload
        },
        setActiveLongDescription: (state, action) => {
            state.activeDeskInfo.activeLongDescription = action.payload
        }
    }
})

export const { setActiveDesk, setActiveColor, setActiveLongDescription } = deskSlice.actions

export default deskSlice.reducer;
