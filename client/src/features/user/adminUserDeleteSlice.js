import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  error: '',
}

export const deleteUser = createAsyncThunk(
  'adminUserDelete/deleteUser',
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
      const { data } = await API.delete(`api/user/admin/delete/${id}`, config)
      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const adminUserDeleteSlice = createSlice({
  name: 'adminUserDelete',
  initialState,
  reducers: {
    deleteUserReset() {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

export const { deleteUserReset } = adminUserDeleteSlice.actions
export default adminUserDeleteSlice.reducer
