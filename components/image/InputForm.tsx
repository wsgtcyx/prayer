// app/components/image/InputForm.tsx
import { FormEvent, useState } from 'react';

interface InputFormProps {
  onSubmit: (verses: string) => void;
  isLoading: boolean; // 新增 isLoading 属性
}

export default function InputForm({ onSubmit, isLoading }: InputFormProps) {
  const [verses, setVerses] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(verses);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full max-w-3xl mx-auto">
      <textarea
        value={verses}
        onChange={(e) => setVerses(e.target.value)}
        className="w-full h-20 p-4 border-2 border-blue-500 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
        rows={5}
        placeholder="Enter Bible verses here..."
        disabled={isLoading} // 当加载中时禁用输入框
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isLoading} // 当加载中时禁用按钮
        >
          {isLoading ? 'Loading...' : 'Create Image'} {/* 根据加载状态切换按钮文本 */}
        </button>
      </div>
    </form>
  );
}
