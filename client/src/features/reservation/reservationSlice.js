import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  reservations: [],
  error: '',
}

export const getUserReservation = createAsyncThunk(
  'reservation/getUserReservation',
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
      const { data } = await API.get('api/reservation', config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)
export const createUserReservation = createAsyncThunk(
  'reservation/createUserReservation',
  async (reservationData, { rejectWithValue, getState }) => {
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
      const { data } = await API.post(
        'api/reservation/create',
        reservationData,
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

const reservationSlice = createSlice({
  name: 'reservationUser',
  initialState,
  reducers: {
    resetReservation() {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserReservation.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUserReservation.fulfilled, (state, action) => {
        state.loading = false
        state.reservations = action.payload
      })
      .addCase(getUserReservation.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      .addCase(createUserReservation.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createUserReservation.fulfilled, (state, action) => {
        state.loading = false
        state.reservations = action.payload
        state.success = true
      })
      .addCase(createUserReservation.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetReservation } = reservationSlice.actions
export default reservationSlice.reducer
