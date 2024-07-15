import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  cars: [],
  error: '',
}

export const getCars = createAsyncThunk(
  'car/getCars',
  async (paginationData, { rejectWithValue }) => {
    const { pageNumber = '', rangeValue = '' } = paginationData
    try {
      const { data } = await API.get(
        `api/cars?rangeValue=${rangeValue}&pageNumber=${pageNumber}`
      )
      return data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
)
export const getAllCars = createAsyncThunk(
  'car/getAllCars',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await API.get(`api/cars/admin`, config)
      return data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
)
export const deleteCarById = createAsyncThunk(
  'car/deleteCarById',
  async (id, { rejectWithValue, getState }) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await API.delete(`api/cars/admin/${id}`, config)
      return data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
)

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    resetCarState(state, action) {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCars.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false
        state.cars = action.payload.cars
        state.page = action.payload.page
        state.pages = action.payload.pages
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      .addCase(getAllCars.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.loading = false
        state.cars = action.payload
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      .addCase(deleteCarById.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteCarById.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
      })
      .addCase(deleteCarById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})
export const { resetCarState } = carSlice.actions
export default carSlice.reducer
