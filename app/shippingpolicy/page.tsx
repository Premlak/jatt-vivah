import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
      <p className="text-lg text-gray-700 mb-6">
        As this is a digital service, no physical shipping is required. Upon successful payment, membership features are activated immediately.
      </p>
      <p className="text-sm text-gray-600">
        For assistance, email us at <a href="mailto:96119611godara@gmail.com" className="text-blue-500 underline">96119611godara@gmail.com</a>.
      </p>
    </div>
  );
};

export default ShippingPolicy;
