// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
// import { useNavigate, useParams } from 'react-router-dom'
// import API from '../api/api'
// import Alert from './Alert'
// import { useEffect } from 'react'
// import {
//   reservationToPaid,
//   resetPaidReservation,
// } from '../features/reservation/reservationToPaidSlice'
// import {
//   getReservation,
//   resetDetailsReservation,
// } from '../features/reservation/reservationDetailsSlice'
// import Spinner from './Spinner'

// const CARD_OPTIONS = {
//   iconStyle: 'solid',
//   style: {
//     base: {
//       iconColor: '#c4f0ff',
//       color: '#fff',
//       fontWeight: 500,
//       fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
//       fontSize: '16px',
//       fontSmoothing: 'antialiased',
//       ':-webkit-autofill': { color: '#fce883' },
//       '::placeholder': { color: '#87bbfd' },
//     },
//     invalid: {
//       iconColor: '#ffc7ee',
//       color: '#ffc7ee',
//     },
//   },
// }
// const StripePay = () => {
//   const [successPay, setSuccessPay] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const stripe = useStripe()
//   const elements = useElements()
//   const amount = 25

//   const dispatch = useDispatch()
//   const params = useParams()
//   const navigate = useNavigate()
//   const reservationId = params.id

//   const reservationPaid = useSelector((state) => state.reservationPaid)
//   const { success: successPaid } = reservationPaid

//   const reservationDetails = useSelector((state) => state.reservationDetails)
//   const { reservation, loading: loadingDetails } = reservationDetails

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

//   useEffect(() => {
//     if (!userInfo) {
//       navigate('/sign-in')
//     }
//     if (!reservation || reservation._id !== reservationId || successPaid) {
//       dispatch(resetPaidReservation())
//       dispatch(resetDetailsReservation())
//       dispatch(getReservation(reservationId))
//     } else {
//       if (successPay) {
//         //dispatch reservation to paid
//         setSuccessPay(false)
//         dispatch(reservationToPaid(reservationId))
//         setLoading(false)
//       }
//     }
//   }, [
//     dispatch,
//     reservationId,
//     successPay,
//     reservation,
//     navigate,
//     userInfo,
//     successPaid,
//   ])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//       billing_details: {
//         name: userInfo.name,
//         email: userInfo.email,
//       },
//     })

//     if (!error) {
//       setLoading(true)
//       try {
//         const config = {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${userInfo.token}`,
//           },
//         }
//         const { id } = paymentMethod
//         const response = await API.post(
//           '/api/stripe/payment',
//           {
//             amount: Math.round(amount * 100),
//             id,
//           },
//           config
//         )

//         if (response.data.success) {
//           console.log('Successful payment')
//           setSuccessPay(true)
//         }
//       } catch (error) {
//         console.log('Error', error)
//       }
//     } else {
//       console.log(error.message)
//     }
//   }
//   if (loading) {
//     return <Spinner />
//   }
//   return (
//     <>
//       {loadingDetails ? (
//         <Spinner />
//       ) : reservation && !reservation.isPaid ? (
//         <div className="max-w-md w-full mx-auto mt-20">
//           <form onSubmit={handleSubmit}>
//             <CardElement options={CARD_OPTIONS} />
//             <button className="btn w-full btn-success">Pay</button>
//           </form>
//         </div>
//       ) : (
//         <div className="max-w-md w-full mx-auto mt-20">
//           <Alert variant="alert-success" message="Successful payment" />
//         </div>
//       )}
//     </>
//   )
// }

// export default StripePay
