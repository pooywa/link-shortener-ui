"use client";

import { useState } from "react";

interface URLFormProps {
  onSubmit: (longUrl: string) => void;
  loading: boolean;
}

const URLForm: React.FC<URLFormProps> = ({ onSubmit, loading }) => {
  const [longUrl, setLongUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidUrl(longUrl)) {
      alert("Please enter a valid URL");
      return;
    }
    onSubmit(longUrl);
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        type="url"
        value={longUrl}
        placeholder="Enter URL"
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button
        className="block mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={loading}
      >
        {loading ? "Shortening..." : "Shorten"}
      </button>
    </form>
  );
};

export default URLForm;
