import { createSlice } from '@reduxjs/toolkit';

const newsPopupSlice = createSlice({
  name: 'newsPopup',
  initialState: {
    title: false,
    img: '',
    text: '',
  },
  reducers: {
    setAuthor: (state, action) => {
      state.title = action.payload;
    },
    setImg: (state, action) => {
      state.img = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setTitle, setImg, setText } = newsPopupSlice.actions;
export default newsPopupSlice.reducer;
