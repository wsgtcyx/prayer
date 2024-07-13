import { Message } from '@/app/prayer/action';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MessageDisplayProps {
  conversation: Message[];
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ conversation }) => {
  return (
    <div className="flex-1 w-full max-w-5xl overflow-auto mb-4 p-4 bg-white dark:bg-gray-800 rounded shadow">
      {conversation.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
          No conversation yet. Start by typing a message below.
        </div>
      ) : (
        conversation.map((message, index) => (
          <div
            key={index}
            className={`p-3 my-2 rounded-lg transition-all duration-200 ease-in-out ${message.role === 'user'
              ? 'bg-blue-100 dark:bg-blue-900 self-end text-right animate-slide-left'
              : 'bg-green-100 dark:bg-green-900 self-start text-left animate-slide-right'
              }`}
          >
            <strong
              className={
                message.role === 'user'
                  ? 'text-blue-700 dark:text-blue-300'
                  : 'text-green-700 dark:text-green-300'
              }
            >
              {message.role === 'user' ? 'You' : 'AI'}:
            </strong>
            <div className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MessageDisplay;
