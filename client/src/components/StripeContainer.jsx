// import React from 'react'
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from '@stripe/react-stripe-js'
// import StripePay from './StripePay'

// const stripePromise = loadStripe(
//   'pk_test_51Hssa7Ff16dHM8M3FCu7VWSVOoUrsRC05LZcNPBR1rRhbBuk7W5q8MyZyO5mFplHpeOeLIsSfCu0z2PS8ANTixvx00z7rVq9ki'
// )

// const StripeContainer = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <StripePay />
//     </Elements>
//   )
// }

// export default StripeContainer
import React from "react";

const StripeContainer = () => {
  return (
    <div className="max-w-md w-full mx-auto mt-20">
      {/* Decorative elements can go here */}
      <div className="bg-gray-200 rounded p-4">
        <h2 className="text-lg font-bold mb-4">Payment Section</h2>
        <p className="text-gray-700">
          This section would normally handle payments through Stripe.
        </p>
        <p className="text-gray-700">
          However, for decorative purposes, it is simplified here.
        </p>
        <button className="btn w-full btn-primary opacity-50" disabled>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default StripeContainer;
