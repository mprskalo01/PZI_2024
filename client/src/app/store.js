import { configureStore } from '@reduxjs/toolkit'
import carCreateReducer from '../features/car/carCreateSlice'
import carDetailsReducer from '../features/car/carDetailsSlice'
import carReducer from '../features/car/carSlice'
import carUpdateReducer from '../features/car/carUpdateSlice'
import reservationApproveReducer from '../features/reservation/reservationApproveSlice'
import reservationDeleteReducer from '../features/reservation/reservationDeleteSlice'
import reservationDetailsReducer from '../features/reservation/reservationDetailsSlice'
import reservationListReducer from '../features/reservation/reservationListSlice'
import reservationReducer from '../features/reservation/reservationSlice'
import reservationToPaidReducer from '../features/reservation/reservationToPaidSlice'
import adminUserDeleteReducer from '../features/user/adminUserDeleteSlice'
import adminUserUpdateReducer from '../features/user/adminUserUpdateSlice'
import userDetailsReducer from '../features/user/userDetailsSlice'
import userListReducer from '../features/user/userListSlice'
import userReducer from '../features/user/userSlice'
import userUpdateReducer from '../features/user/userUpdateSlice'

export const store = configureStore({
  reducer: {
    userLogin: userReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userAdminUpdate: adminUserUpdateReducer,
    userDelete: adminUserDeleteReducer,
    userCreate: adminUserUpdateReducer,
    userDetails: userDetailsReducer,
    carsList: carReducer,
    carDetails: carDetailsReducer,
    carUpdate: carUpdateReducer,
    carCreate: carCreateReducer,
    reservationUser: reservationReducer,
    reservationList: reservationListReducer,
    reservationApprove: reservationApproveReducer,
    reservationPaid: reservationToPaidReducer,
    reservationDetails: reservationDetailsReducer,
    reservationDelete: reservationDeleteReducer,
  },
})
