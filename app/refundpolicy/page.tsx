import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Cancellation/Refund Policy</h1>
      <p className="text-lg text-gray-700 mb-6">
        Refunds are processed only in case of technical failures during payment. Membership cannot be canceled or refunded once activated.
      </p>
      <p className="text-sm text-gray-600">
        For support, email us at <a href="mailto:96119611godara@gmail.com" className="text-blue-500 underline">96119611godara@gmail.com</a>.
      </p>
    </div>
  );
};

export default CancellationRefundPolicy;
