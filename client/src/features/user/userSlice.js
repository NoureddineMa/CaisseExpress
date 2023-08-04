import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    FullName: '',
    role: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName(state, action) {
          state.FullName = action.payload;
        },
      }
});


export const { setName } = userSlice.actions;
export default userSlice.reducer
