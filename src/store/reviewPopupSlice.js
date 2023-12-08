import { createSlice } from '@reduxjs/toolkit';

const reviewPopupSlice = createSlice({
  name: 'reviewPopup',
  initialState: {
    title: '',
    grade: '',
    text: '',
    index: '',
  },
  reducers: {
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setGrade: (state, action) => {
      state.grade = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setAuthor, setGrade, setContent, setIndex } =
  reviewPopupSlice.actions;
export default reviewPopupSlice.reducer;
