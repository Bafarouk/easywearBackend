import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";
import { setErrors } from "./postSlice";

let initialState = {
  comments: [],
  selectedComment: {},
  errors: "",
};

const commentSlice = createSlice({
  name: "cooments",
  initialState,
  reducers: {
    populateComments(state, action) {
      state.comments = action.payload;
    },
    selectComment(state, action) {
      state.selectedComment = action.payload;
    },
    unselectComment(state) {
      state.selectedComment = null;
    },

    addComment: (state, action) => {
      const payload = action.payload;
      state.comments.push(payload);
    },

    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchPostComments = (postid) => async (dispatch) => {
  const [res, error] = await queryApi(
    "comment/postComments/" + postid,
    {},
    "GET"
  );

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateComments(res));
  }
};
export const selectComments = (state) => {
  return [state.commentSlice.comments, state.commentSlice.errors];
};

export const selectSelectedComments = (state) => {
  return state.commentSlice.selectedComment;
};
export const {
  populateComments,
  selectComment,
  unselectComment,
  addComment,
} = commentSlice.actions;

export default commentSlice.reducer;
