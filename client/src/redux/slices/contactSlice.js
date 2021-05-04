import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  contacts: [],
  selectedContact: {},
  errors: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    populatecontact(state, action) {
      state.contacts = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    addContact: (state, action) => {
      const payload = action.payload;
      state.contacts.push(payload);
    },
    selectContact: (state, action) => {
      state.selectedContact = action.payload;
    },
    deleteContact: (state, action) => {
      const payload = action.payload;
      const index = state.contacts.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },
    unselectContact(state) {
      state.selectedContact = null;
    },
  },
});

export const fetchContacts = () => async (dispatch) => {
  const [res, error] = await queryApi("contact/getAllContacts");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populatecontact(res));
  }
};

export const selectSelectedContact = (state) => {
  return state.contactSlice.selectedContact;
};

export const selectContacts = (state) => {
  return [state.contactSlice.contacts, state.contactSlice.errors];
};
export const {
  populatecontact,
  setErrors,
  addContact,
  deleteContact,
  selectContact,
  selectedContact,

  unselectContact,
} = contactSlice.actions;

export default contactSlice.reducer;
