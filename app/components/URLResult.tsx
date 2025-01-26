interface URLResultProps {
  shortCode: string;
}

const URLResult: React.FC<URLResultProps> = ({ shortCode }) => {
  const shortUrl = `http://localhost:8080/${shortCode}`;
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-2 w-full max-w-md">
      <h3 className="text-lg font-semibold">Your short URL is:</h3>
      <a
        className="text-blue-500 hover:underline text-center text-lg font-semibold"
        href={shortUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {shortUrl}
      </a>
    </div>
  );
};

export default URLResult;
