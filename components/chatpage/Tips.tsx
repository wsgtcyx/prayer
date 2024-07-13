// app/components/chat/Tips.tsx

import React from 'react';

const Tips: React.FC = () => {

  const navigateToImagePage = () => {
    window.open('/image', '_blank');
  };

  return (
    <div className="w-full max-w-4xl p-20 bg-blue-100 dark:bg-blue-800 rounded shadow mb-8">
      <h2 className="text-xl font-bold mb-4 text-center">Tips</h2>
      <p className="mb-4 text-center">
        After generating your Bible verses, you can copy the verses and create beautiful images with them on our Image Creator page.
      </p>
      <div className="flex justify-center">
        <button
          onClick={navigateToImagePage}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors duration-200"
        >
          Go to Image Creator
        </button>
      </div>
    </div>
  );
};

export default Tips;
