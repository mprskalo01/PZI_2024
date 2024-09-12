import React from "react";

const StripeContainer = () => {
  return (
    <div className='max-w-md w-full mx-auto mt-20'>
      {/* Decorative elements can go here */}
      <div className='bg-gray-200 rounded p-4'>
        <h2 className='text-lg font-bold mb-4'>Payment Section</h2>
        <p className='text-gray-700'>
          This section would normally handle payments through Stripe.
        </p>
        <p className='text-gray-700'>
          However, for decorative purposes, it is simplified here.
        </p>
        <button className='btn w-full btn-primary opacity-50' disabled>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default StripeContainer;
