import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";
import { setErrors } from "./postSlice";

let initialState = {
  Reaction: [],
  selectedReaction: {},
  errors: "",
};

const ReactionSlice = createSlice({
  name: "reaction",
  initialState,
  reducers: {
    populateReaction(state, action) {
      state.Reaction = action.payload;
    },
    selectReaction(state, action) {
      state.selectedReaction = action.payload;
    },
    unselectReaction(state) {
      state.selectedReaction = null;
    },

    addReaction: (state, action) => {
      const payload = action.payload;
      state.Reaction.push(payload);
    },

    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchPostReaction = (postid) => async (dispatch) => {
  console.log("fetchPostReaction Begin");
  const [res, error] = await queryApi(
    "Reaction/postReaction/" + postid,
    {},
    "GET"
  );
  console.log("fetchPostReaction End");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateReaction(res));
  }
};

export const selectReactions = (state) => {
  return [state.ReactionSlice.Reaction, state.ReactionSlice.errors];
};

export const selectSelectedReactions = (state) => {
  return state.ReactionSlice.selectedReaction;
};
export const {
  populateReaction,
  unselectReaction,
  addReaction,
} = ReactionSlice.actions;

export default ReactionSlice.reducer;
