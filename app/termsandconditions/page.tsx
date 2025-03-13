import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <ul className="text-lg text-gray-700 space-y-4">
        <li>Membership is non-transferable and for personal use only.</li>
        <li>No refunds after the membership period has begun.</li>
        <li>Users are required to provide accurate details during registration.</li>
      </ul>
      <p className="text-sm text-gray-600 mt-4">
        For inquiries, contact us at <a href="mailto:96119611godara@gmail.com" className="text-blue-500 underline">96119611godara@gmail.com</a>.
      </p>
    </div>
  );
};

export default TermsConditions;
