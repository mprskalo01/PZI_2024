import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('userInfo'))

const initialState = {
  userInfo: user ? user : null,
}

export const userUpdateProfile = createAsyncThunk(
  'userUpdate/userUpdateProfile',
  async (userData, { getState, rejectWithValue }) => {
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
        'api/user/profile-update',
        userData,
        config
      )
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

export const resetProfilTimeout = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(userProfileReset())
  }, 3000)
}

const userUpdateSlice = createSlice({
  name: 'userUpdate',
  initialState,
  reducers: {
    userProfileReset() {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userUpdateProfile.pending, (state, action) => {
        state.loading = true
      })
      .addCase(userUpdateProfile.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
        state.success = true
      })
      .addCase(userUpdateProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { userProfileReset } = userUpdateSlice.actions

export default userUpdateSlice.reducer
