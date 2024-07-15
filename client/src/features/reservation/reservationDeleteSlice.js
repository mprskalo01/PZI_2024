import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  success: false,
  error: '',
}

export const deleteReservation = createAsyncThunk(
  'reservationDelete/deleteReservation',
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
      const { data } = await API.delete(`api/reservation/${id}`, config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const reservationDeleteSlice = createSlice({
  name: 'reservationDelete',
  initialState,
  reducers: {
    resetReservationDelete() {
      return initialState
    },
  },
  extraReducers(builder) {
    builder
      .addCase(deleteReservation.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetReservationDelete } = reservationDeleteSlice.actions
export default reservationDeleteSlice.reducer
