import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  car: {},
  error: '',
}

export const getCarbyId = createAsyncThunk(
  'car/getCarbyId',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await API.get(`api/cars/${id}`)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const carDetailsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    resetCarDetails(state) {
      state.car = []
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCarbyId.pending, (state) => {
        state.loading = true
      })
      .addCase(getCarbyId.fulfilled, (state, action) => {
        state.loading = false
        state.car = action.payload
      })
      .addCase(getCarbyId.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})
export const { resetCarDetails } = carDetailsSlice.actions
export default carDetailsSlice.reducer
