import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  error: '',
}

export const updateCar = createAsyncThunk(
  'carUpdate/updateCar',
  async (carData, { rejectWithValue, getState }) => {
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
      const { data } = await API.put(
        `api/cars/admin/edit/${carData.id}`,
        carData,
        config
      )

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const carUpdateSlice = createSlice({
  name: 'carUpdate',
  initialState,
  reducers: {
    resetCarUpdate() {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(updateCar.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
      })
      .addCase(updateCar.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetCarUpdate } = carUpdateSlice.actions
export default carUpdateSlice.reducer
