import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: [],
};

export const createPageSlice = createSlice({
  name: "createPageSlice",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      console.log(action.payload);
    },
  },
});
export const { addComponent } = createPageSlice.actions;

export default createPageSlice.reducer;
