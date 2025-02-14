import React from 'react';

interface LanguageSelectorProps {
  locale: string;
  setLocale: (locale: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ locale, setLocale }) => {
  return (
    <div className="w-full max-w-5xl flex justify-end mb-4">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="p-2 border-2 border-gray-300 rounded shadow text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="ru">Русский</option>
        <option value="pl">Polski</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
