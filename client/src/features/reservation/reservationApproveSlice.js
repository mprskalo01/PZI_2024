import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  error: '',
}

export const reservationToApprove = createAsyncThunk(
  'reservationApprove/reservationToApprove',
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
      const { data } = await API.put(`api/reservation/${id}`, {}, config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const reservationApproveSlice = createSlice({
  name: 'reservationApprove',
  initialState,
  reducers: {
    resetApproveReservation() {
      return { initialState }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(reservationToApprove.pending, (state, action) => {
        state.loading = true
      })
      .addCase(reservationToApprove.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
      })
      .addCase(reservationToApprove.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetApproveReservation } = reservationApproveSlice.actions
export default reservationApproveSlice.reducer
