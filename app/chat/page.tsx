'use client';

import FAQ from '@/components/chatpage/FAQ';
import Features from '@/components/chatpage/Features';
import Hero from '@/components/chatpage/Hero';
import InputField from '@/components/chatpage/InputField';
import MessageDisplay from '@/components/chatpage/MessageDisplay';
import Tips from '@/components/chatpage/Tips';
import UseCases from '@/components/chatpage/UserCases';
import { readStreamableValue } from 'ai/rsc';
import { useState } from 'react';
import { Message, continueConversation } from './action';


// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function ChatPage() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async (input: string) => {
    if (input.length > 1000) {
      alert('Input is too long. Please enter less than 1000 characters.');
      return;
    } else if (input.length < 1) {
      alert('Input is too short. Please enter at least 1 character.');
      return;
    }
    setIsLoading(true);
    console.log('Sending message:', input);
    const { messages, newMessage } = await continueConversation([
      { role: 'user', content: input },
    ]);

    let textContent = '';

    for await (const delta of readStreamableValue(newMessage)) {
      textContent = `${textContent}${delta}`;
      setConversation([
        { role: 'user', content: input },
        { role: 'assistant', content: textContent },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900">
      <Hero />
      <MessageDisplay conversation={conversation} />
      <InputField onSendMessage={handleSendMessage} isLoading={isLoading} />
      <Tips />
      <UseCases />
      <Features />
      <FAQ />
    </div>
  );
}
