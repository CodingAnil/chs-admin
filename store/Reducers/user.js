import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user_details",
  initialState: { selectedMenu: "", selectedUser: {} },
  reducers: {
    storeUserData: (state, action) => {
      state.selectedMenu = action.payload?.label;
      state.selectedUser = action.payload?.value;
    },
  },
});

export const { storeUserData } = usersSlice.actions;
export default usersSlice.reducer;
