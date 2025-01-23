import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [shortCode, setShortCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8080/shorten", {  });
      setShortCode(response.data.shortCode);
    } catch (error) {
      console.error("Error shortening URL:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
