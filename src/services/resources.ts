import { useState, useEffect } from 'react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'PDF' | 'Video' | 'Document';
  category: string;
  url: string;
  size: string;
  downloadCount: number;
}

export const useResources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/api/resources');
        const data = await response.json();
        setResources(data);
      } catch (err) {
        setError('Failed to fetch resources');
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  return { resources, loading, error };
};