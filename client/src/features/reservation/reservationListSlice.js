import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  reservations: [],
  error: '',
}

export const getAllReservations = createAsyncThunk(
  'reservationList/getAllReservation',
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
      const { data } = await API.get('api/reservation/admin', config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const reservationListSlice = createSlice({
  name: 'reservationList',
  initialState,
  reducers: {
    resetReservation() {
      return { initialState }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllReservations.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllReservations.fulfilled, (state, action) => {
        state.loading = false
        state.reservations = action.payload
      })
      .addCase(getAllReservations.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

// export const { resetReservation } = reservationListSlice.actions
export default reservationListSlice.reducer
