import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  error: '',
}

export const createCar = createAsyncThunk(
  'carCreate/createCar',
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
      const { data } = await API.post(`api/cars/admin/create`, carData, config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const carCreateSlice = createSlice({
  name: 'carCreate',
  initialState,
  reducers: {
    resetCarCreate() {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createCar.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
      })
      .addCase(createCar.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetCarCreate } = carCreateSlice.actions
export default carCreateSlice.reducer
