import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1";

export const getCats = createAsyncThunk("cats/getCats", async (page) => {
  try {
    const url = `${API_URL}/images/search?limit=10&page=${page}
      `;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCatsByCategories = createAsyncThunk(
  "cats/getCats",
  async ({ id, page }) => {
    try {
      const url = `${API_URL}/images/search?limit=10&page=${page}&category_ids=${id}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "cats/getCategories",
  async () => {
    try {
      const url = `${API_URL}/categories`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
