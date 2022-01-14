import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  listOfFeature: ["background", "eyes", "nose", "hair"],
}

export const NotrealMenuSlice = createSlice({
  name: 'list of features',
  initialState,
  reducers: {
    addNewFeature:(state, payload)=>{
        state.listOfFeature.push(payload.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewFeature } = NotrealMenuSlice.actions

export default NotrealMenuSlice.reducer
