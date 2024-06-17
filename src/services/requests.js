import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(
        "https://connections-api.herokuapp.com/contacts"
      );

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response ? e.response.data : e.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/deleteContactById",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${id}`
      );

      return id;
    } catch (e) {
      return rejectWithValue(e.response ? e.response.data : e.message);
    }
  }
);
