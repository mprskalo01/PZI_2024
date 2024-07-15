import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  user: {},
  error: '',
}

export const getUserDetails = createAsyncThunk(
  'userDetails/getuserDetails',
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
      const { data } = await API.get(
        `api/user/admin/user-details/${id}`,
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

const adminUserUpdateSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    resetUserUpdateReset() {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserDetails.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetUserUpdateReset } = adminUserUpdateSlice.actions
export default adminUserUpdateSlice.reducer
