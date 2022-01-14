import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nonRealImages:[]
}

export const ResultSlice = createSlice({
  name: 'list of features',
  initialState,
  reducers: {
    updateResults:(state,payload)=>{
        state.nonRealImages.push(payload.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateResults } = ResultSlice.actions

export default ResultSlice.reducer
