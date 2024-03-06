import { useState, useEffect } from 'react';

interface LinkPreviewProps {
  url: string;
}

function LinkPreview({ url }: LinkPreviewProps) {
  const [previewData, setPreviewData] = useState<LinkPreviewData | null>(null);
  const [loading, setLoading] = useState(true);

  interface LinkPreviewData {
    title: string;
    description: string;
    image: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        const title = doc.querySelector('title')?.textContent || '';
        const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
        const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

        setPreviewData({ title, description, image });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!previewData) {
    return <p>Failed to fetch link preview.</p>;
  }

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{previewData.title}</h3>
      <p>{previewData.description}</p>
      {previewData.image && <img src={previewData.image} alt="Link Preview" />}
    </div>
  );
}

export default LinkPreview;
