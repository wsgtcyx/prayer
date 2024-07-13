// app/components/image/Tips.tsx

export default function Tips() {

  const openChatInNewTab = () => {
    window.open('/chat', '_blank');
  };

  return (
    <div className="w-full max-w-7xl p-6 my-8 bg-blue-100 dark:bg-blue-900 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Tips</h2>
      <p className="text-center mb-4 text-gray-800 dark:text-gray-200">
        If you are unsure of what verses to input, you can visit our
        <span className="font-bold"> Chat </span> page to get some inspiration.
        Simply copy and paste the verses here.
      </p>
      <div className="flex justify-center">
        <button
          onClick={openChatInNewTab}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Find Your Verses
        </button>
      </div>
    </div>
  );
}
