import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  error: '',
}

export const updateUser = createAsyncThunk(
  'adminUserUpdate/updateUser',
  async (userData, { rejectWithValue, getState }) => {
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
        `api/user/admin/${userData.id}`,
        userData,
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
  name: 'adminUserUpdate',
  initialState,
  reducers: {
    resetUserUpdate() {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(updateUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { resetUserUpdate } = adminUserUpdateSlice.actions
export default adminUserUpdateSlice.reducer
