import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
  },
  reducers: {
    getUser(state, action) {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.child_first_name = action.payload.child_first_name;
      state.child_last_name = action.payload.child_last_name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    updateUser(state, action) {},
  },
});

export const { getUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
