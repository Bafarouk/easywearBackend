import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  posts: [],
  selectedPosts: {},
  errors: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    populatePost(state, action) {
      state.posts = action.payload;
    },
    selectPost(state, action) {
      state.selectedPosts = action.payload;
    },
    unselectPost(state) {
      state.selectedPosts = null;
    },

    updatePost: (state, action) => {
      const payload = action.payload;
      const index = state.posts.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.posts[index] = payload;
      }
    },
    addPost: (state, action) => {
      const payload = action.payload;
      state.posts.push(payload);
    },
    deletePost: (state, action) => {
      const payload = action.payload;
      const index = state.posts.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.posts.splice(index, 1);
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchPosts = (userid) => async (dispatch) => {
  const [res, error] = await queryApi("post/userPosts/" + userid, {}, "GET");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populatePost(res));
  }
};

export const selectPosts = (state) => {
  return [state.postSlice.posts, state.postSlice.errors];
};

export const selectSelectedPosts = (state) => {
  return state.postSlice.selectedPosts;
};
export const {
  populatePost,
  addPost,
  deletePost,
  selectPost,
  updatePost,
  unselectPost,
  setErrors,
} = postSlice.actions;

export default postSlice.reducer;
