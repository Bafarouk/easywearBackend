import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";
import eventSlice from "./slices/eventSlice";
import contactSlice from "./slices/contactSlice";

import commentSlice from "./slices/commentSlice";
import ReactionSlice from "./slices/reactionSlice";
import userSlice from "./slices/userSlice";
import products from "./reducers/productsReducer";

import productfilters from "./reducers/ProductfiltersReducer";
const reducers = combineReducers({
  products,
  productfilters,
  postSlice,
  claimSlice,
  eventSlice,
  contactSlice,
  commentSlice,
  ReactionSlice,
  userSlice,
});

export default reducers;
