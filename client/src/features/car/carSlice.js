import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

const initialState = {
  loading: false,
  cars: [],
  error: "",
  page: 1,
  pages: 1,
};

export const getCars = createAsyncThunk(
  "car/getCars",
  async (paginationData, { rejectWithValue }) => {
    const { pageNumber = "", rangeValue = "" } = paginationData;
    try {
      const { data } = await API.get(
        `api/cars?rangeValue=${rangeValue}&pageNumber=${pageNumber}`
      );
      return data;
    } catch (err) {
      if (!err.response) {
        return rejectWithValue({
          message: "Network error. Please try again later.",
        });
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllCars = createAsyncThunk(
  "car/getAllCars",
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await API.get(`api/cars/admin`, config);
      return data;
    } catch (err) {
      if (!err.response) {
        return rejectWithValue({
          message: "Network error. Please try again later.",
        });
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteCarById = createAsyncThunk(
  "car/deleteCarById",
  async (id, { rejectWithValue, getState }) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await API.delete(`api/cars/admin/${id}`, config);
      return data;
    } catch (err) {
      if (!err.response) {
        return rejectWithValue({
          message: "Network error. Please try again later.",
        });
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    resetCarState: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload.cars || [];
        state.page = action.payload.page || 1;
        state.pages = action.payload.pages || 1;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "An error occurred. Please try again.";
      })
      .addCase(getAllCars.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload || [];
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "An error occurred. Please try again.";
      })
      .addCase(deleteCarById.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteCarById.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteCarById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "An error occurred. Please try again.";
      });
  },
});

export const { resetCarState } = carSlice.actions;
export default carSlice.reducer;
