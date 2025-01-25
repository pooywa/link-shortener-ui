"use client";

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
      const payload = { long_url: longUrl }; //Backend APIs use long_url

      console.log("Sending payload:", payload); // Debug log

      const response = await axios.post(
        "http://localhost:8080/shorten",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data); // Debug log
      setShortCode(response.data.shortCode);
    } catch (error) {
      console.error("Error shortening URL:", error);
      if (axios.isAxiosError(error)) {
        console.log("Error response:", error.response?.data); // Debug log
        console.log("Error status:", error.response?.status); // Additional debug log
      }
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
