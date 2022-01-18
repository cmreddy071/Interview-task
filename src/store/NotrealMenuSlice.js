import { createSlice } from '@reduxjs/toolkit'

// Default feature of popup checkbox list.
const initialState = {
  listOfFeature: ["background", "eyes", "nose", "hair"],
}

export const NotrealMenuSlice = createSlice({
  name: 'list of features',
  initialState,
  reducers: {
    // Adding new feature if enter feature in input.
    addNewFeature:(state, payload)=>{
        state.listOfFeature.push(payload.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewFeature } = NotrealMenuSlice.actions

export default NotrealMenuSlice.reducer
