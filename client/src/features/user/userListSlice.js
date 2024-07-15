import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../api/api'

const initialState = {
  loading: false,
  users: [],
  error: '',
}

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
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
      const { data } = await API.get('api/user/admin', config)

      return data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    resetGetAllUsers() {
      return {}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})
export const { resetGetAllUsers } = userListSlice.actions
export default userListSlice.reducer
