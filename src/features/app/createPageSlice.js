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
      const { x, y, w, h } = action.payload;

      state.layout.push({
        i: `${state.draggin}/${state.layout.length}`,
        x,
        y,
        w: 3,
        h: 6,
      });
    },
    layoutShift: (state, action) => {
      state.layout = action.payload;
    },
    changeDraggin: (state, action) => {
      state.draggin = action.payload ? action.payload : null;
    },
  },
});
export const { changeDraggin, layoutShift, addComponent } =
  createPageSlice.actions;

export default createPageSlice.reducer;
