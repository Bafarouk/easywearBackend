import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  users: [],
  selectedUsers: {},
  errors: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    populateUser(state, action) {
      state.users = action.payload;
    },
    selectUser(state, action) {
      state.selectedUsers = action.payload;
    },
    unselectUser(state) {
      state.selectedUsers = null;
    },

    updateUser: (state, action) => {
      const payload = action.payload;
      const index = state.users.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.users[index] = payload;
      }
    },
    addUser: (state, action) => {
      const payload = action.payload;
      state.users.push(payload);
    },
    deleteUser: (state, action) => {
      const payload = action.payload;
      const index = state.users.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchUsers = () => async (dispatch) => {
  const [res, error] = await queryApi("user/getAll");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateUser(res));
  }
};

export const selectUsers = (state) => {
  return [state.userSlice.users, state.userSlice.errors];
};

export const selectSelectedUsers = (state) => {
  return state.userSlice.selectedUsers;
};
export const {
  populateUser,
  addUser,
  deleteUser,
  selectUser,
  updateUser,
  unselectUser,
  setErrors,
} = userSlice.actions;

export default userSlice.reducer;
