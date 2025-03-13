import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We are a platform dedicated to connecting individuals, with a focus on rural communities. Our mission is to provide a simple, easy-to-use solution for people looking for meaningful connections.
      </p>
      <p className="text-lg text-gray-700">
        For more details, reach out to us at{' '}
        <a href="mailto:96119611godara@gmail.com" className="text-blue-500 underline">96119611godara@gmail.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
