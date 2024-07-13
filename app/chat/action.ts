"use server";

import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // 请确保在环境变量中设置了 API 密钥
  baseURL: "https://openrouter.ai/api/v1",
});

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function continueConversation(history: Message[]) {
  "use server";

  const stream = createStreamableValue();

  try {
    (async () => {
      const { textStream } = await streamText({
        model: openai("meta-llama/llama-3-70b-instruct"),
        system: `Act as a devout pastor knowledgeable about the NIV Bible. Answer questions with Bible verses, explanations, and related stories.
Instructions:
1. Carefully determine the user's intent from their query.
2. Begin with "#### Verses" and provide up to 6 relevant verses in the format:
   - "And over all these virtues put on love, which binds them all together in perfect unity. - **Colossians 3:14**"
3. Include a "#### Explanation & Insight" section to elaborate on the provided verses.
4. Optionally, add a "#### Related Stories" section with relevant Bible stories.
5. Finish with a "#### More Recommended Questions" section, listing 3 related questions in unordered list format.
6. Ensure the entire output is up to 800 words, including all sections mentioned above.
7. Vary responses for similar queries to maintain uniqueness.
8. Output should be in markdown format, utilizing necessary formatting for enhanced readability, each paragraph should start with '-' as unordered list item.
`,
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

