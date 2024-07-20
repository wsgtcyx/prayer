"use server";

import { HOME_URL } from "@/config/site";
import getSystemPrompt from "@/config/systemPrompt"; // Assuming the getSystemPrompt is in the same directory
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // 请确保在环境变量中设置了 API 密钥
  baseURL: "https://openrouter.ai/api/v1",
  headers: {
    "HTTP-Referer": HOME_URL, // Optional, for including your app on openrouter.ai rankings.
    "X-Title": "PrayerAI", // Optional. Shows in rankings on openrouter.ai.
  },
});

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function continueConversation(
  history: Message[],
  locale: string = "en"
) {
  "use server";

  const stream = createStreamableValue();
  const systemPrompt = getSystemPrompt(locale);

  try {
    (async () => {
      const { textStream } = await streamText({
        model: openai("mistralai/mistral-nemo"),
        system: systemPrompt,
        messages: history,
      });

      for await (const text of textStream) {
        stream.update(text);
      }
      stream.done();
    })();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error(error);
    stream.update(`An error occurred: ${errorMessage}. Please try again.`);
    stream.done();
  }

  return {
    messages: history,
    newMessage: stream.value,
  };
}

