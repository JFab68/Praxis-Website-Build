// Base API configuration and utilities
import { useState, useCallback, useEffect } from 'react';

interface ApiError {
  message: string;
  code?: string;
}

interface ApiConfig {
  baseUrl?: string;
  headers?: Record<string, string>;
  retryAttempts?: number;
  retryDelay?: number;
}

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

const DEFAULT_CONFIG: ApiConfig = {
  baseUrl: '/api',
  retryAttempts: 3,
  retryDelay: 1000,
};

export const useApi = <T>(
  endpoint: string,
  config: ApiConfig = {}
): ApiResponse<T> & {
  refetch: () => Promise<void>;
} => {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const mergedConfig = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  const fetchWithRetry = async (
    attempt: number = 1
  ): Promise<T> => {
    try {
      const response = await fetch(
        `${mergedConfig.baseUrl}/${endpoint}`,
        {
          headers: mergedConfig.headers,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (attempt < (mergedConfig.retryAttempts || 1)) {
        await new Promise(resolve => 
          setTimeout(resolve, mergedConfig.retryDelay)
        );
        return fetchWithRetry(attempt + 1);
      }
      throw error;
    }
  };

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await fetchWithRetry();
      setState({ data, loading: false, error: null });
    } catch (err) {
      setState({
        data: null,
        loading: false,
        error: { message: (err as Error).message }
      });
    }
  }, [endpoint, mergedConfig]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData
  };
};

export const API_CONFIG = {
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
};