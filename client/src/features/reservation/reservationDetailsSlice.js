import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  reservation: {},
  error: '',
}

export const getReservation = createAsyncThunk(
  'reservationDetails/getReservation',
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
      const { data } = await API.get(`api/reservation/${id}/details`, config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const reservationDetailsSlice = createSlice({
  name: 'reservationDetails',
  initialState,
  reducers: {
    resetDetailsReservation(state, action) {
      return initialState
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getReservation.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getReservation.fulfilled, (state, action) => {
        state.loading = false
        state.reservation = action.payload
      })
      .addCase(getReservation.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetDetailsReservation } = reservationDetailsSlice.actions
export default reservationDetailsSlice.reducer
