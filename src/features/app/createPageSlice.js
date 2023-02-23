import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: [],
  draggin: null,
};

export const createPageSlice = createSlice({
  name: "createPageSlice",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { x, y, w, h } = action.payload[0];
      console.log(action.payload[0]);
      state.layout.push({
        i: `${action.payload.i}/${state.layout.length}`,
        x,
        y,
        w,
        h,
      });
    },
    layoutShift: (state, action) => {
      state.layout = action.payload;
    },
    changeDraggin: (state, action) => {
      console.log(action.payload);
    },
  },
});
export const { changeDraggin, layoutShift, addComponent } =
  createPageSlice.actions;

export default createPageSlice.reducer;
