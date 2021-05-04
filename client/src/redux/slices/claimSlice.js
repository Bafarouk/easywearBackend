import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  claims: [],
  selectedClaim: {},
  errors: "",
};

const claimSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {
    populateclaim(state, action) {
      state.claims = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    addClaim: (state, action) => {
      const payload = action.payload;
      state.claims.push(payload);
    },
    selectClaim: (state, action) => {
      state.selectedClaim = action.payload;
    },
    deleteClaim: (state, action) => {
      const payload = action.payload;
      const index = state.claims.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.claims.splice(index, 1);
      }
    },
    unselectClaim(state) {
      state.selectedClaim = null;
    },
    updateStateClaim: (state, action) => {
      const payload = action.payload;
      const index = state.claims.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.claims[index] = payload;
      }
    },

    updateClaim: (state, action) => {
      const payload = action.payload;
      const index = state.claims.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.claims[index] = payload;
      }
    },
  },
});

export const fetchClaims = () => async (dispatch) => {
  const [res, error] = await queryApi("claim/findAll");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateclaim(res));
  }
};

export const fetchClaimByType = (type, id) => async (dispatch) => {
  const [res, error] = await queryApi(
    "claim/findAllByType/" + id + "?type=" + type
  );

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateclaim(res));
  }
};

export const selectSelectedClaim = (state) => {
  return state.claimSlice.selectedClaim;
};

export const selectClaims = (state) => {
  return [state.claimSlice.claims, state.claimSlice.errors];
};
export const {
  populateclaim,
  setErrors,
  addClaim,
  deleteClaim,
  selectClaim,
  updateStateClaim,
  unselectClaim,
  updateClaim,
} = claimSlice.actions;

export default claimSlice.reducer;
