import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'
import { resetReservation } from '../reservation/reservationSlice'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('userInfo'))

const initialState = {
  loading: false,
  userInfo: user ? user : null,
  error: '',
}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await API.post('api/user/login', userData, config)
      if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data))
      }
      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await API.post('api/user/register', userData, config)
      if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data))
      }
      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    await localStorage.removeItem('userInfo')
    dispatch(reset())
    dispatch(resetReservation())
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = ''
      state.userInfo = null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
        state.error = ''
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null
        state.error = ''
      })
  },
})

export const { reset } = userSlice.actions
export default userSlice.reducer
