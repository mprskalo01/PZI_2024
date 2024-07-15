import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  success: false,
}

export const reservationToPaid = createAsyncThunk(
  'reservationPaid/reservationToPaid',
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
      const { data } = await API.put(`api/reservation/${id}/paid`, {}, config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const reservationToPaidSlice = createSlice({
  name: 'reservationPaid',
  initialState,
  reducers: {
    resetPaidReservation(state, action) {
      state.success = false
    },
  },
  extraReducers(builder) {
    builder
      .addCase(reservationToPaid.pending, (state, action) => {
        state.success = false
      })
      .addCase(reservationToPaid.fulfilled, (state, action) => {
        state.success = true
      })
      .addCase(reservationToPaid.rejected, (state, action) => {
        state.success = false
        state.error = action.payload.message
      })
  },
})

export const { resetPaidReservation } = reservationToPaidSlice.actions
export default reservationToPaidSlice.reducer
