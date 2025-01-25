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
        type="url"
        value={longUrl}
        placeholder="Enter URL"
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Shortening..." : "Shorten"}
      </button>
    </form>
  );
};

export default URLForm;
