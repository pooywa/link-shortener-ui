import { useState } from "react";
import axios from "axios";
import URLForm from "../components/URLForm";
import URLResult from "../components/URLResult";

const Home: React.FC = () => {
  const [shortCode, setShortCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleShorten = async (longUrl: string) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8080/shorten", {
        longUrl,
      });
      setShortCode(response.data.shortCode);
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Error shortening URL");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>URL Shortener</h1>
      <URLForm onSubmit={handleShorten} loading={loading} />
      {shortCode && <URLResult shortCode={shortCode} />}
    </div>
  );
};

export default Home;
