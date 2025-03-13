import React from 'react';

const PricingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Pricing Policy</h1>
      <p className="text-lg text-gray-700 mb-6">
        Our membership plan costs <span className="font-bold">₹307</span> for 90 days, offering unlimited features. Prices are inclusive of all applicable taxes.
      </p>
      <p className="text-sm text-gray-600">
        For more details, contact us at <a href="mailto:96119611godara@gmail.com" className="text-blue-500 underline">96119611godara@gmail.com</a>.
      </p>
    </div>
  );
};

export default PricingPolicy;
