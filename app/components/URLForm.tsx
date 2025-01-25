import { useState } from "react";

interface URLFormProps {
  onSubmit: (longUrl: string) => void;
  loading: boolean;
}

const URLForm: React.FC<URLFormProps> = ({ onSubmit, loading }) => {
  const [longUrl, setLongUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (longUrl.trim() === "") {
      alert("Please enter a valid URL");
      return;
    }
    onSubmit(longUrl);
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
