import React, { useEffect, useRef, useState } from 'react';

interface InputFieldProps {
  onSendMessage: (input: string) => void;
  isLoading: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = () => {
    if (input.trim().length > 0 && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="w-full max-w-5xl flex items-center space-x-2">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className="flex-1 p-4 border-2 border-gray-300 rounded shadow text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none overflow-hidden"
        placeholder="Type your prayer request here...(Example: prayer for healing)"
        disabled={isLoading}
        rows={1}
      />
      <button
        onClick={handleSendMessage}
        className={`p-4 bg-blue-500 text-white rounded shadow ${isLoading ? 'bg-blue-300' : 'hover:bg-blue-600'
          } dark:bg-blue-700 dark:hover:bg-blue-600 dark:disabled:bg-blue-500 transition-colors duration-200`}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default InputField;
