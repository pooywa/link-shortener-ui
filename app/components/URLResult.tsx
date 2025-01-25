interface URLResultProps {
  shortCode: string;
}

const URLResult: React.FC<URLResultProps> = ({ shortCode }) => {
  const shortUrl = `http://localhost:8080/${shortCode}`;
  return (
    <div>
      <h3>Your short URL is:</h3>
      <a href={shortUrl} target="_blank" rel="noopener noreferrer">
        {shortUrl}
      </a>
    </div>
  );
};

export default URLResult;
