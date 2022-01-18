import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nonRealImages:[]
}
// Store non real images list
export const ResultSlice = createSlice({
  name: 'list of features',
  initialState,
  reducers: {
    // Update the non real images list.
    updateResults:(state,payload)=>{
        state.nonRealImages.unshift(payload.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateResults } = ResultSlice.actions

export default ResultSlice.reducer
