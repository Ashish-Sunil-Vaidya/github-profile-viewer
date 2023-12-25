import { createContext, useState } from "react";
import axios from "axios";

interface UserData {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  company: string;
  location: string;
  email: string;
  blog: string;
}

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  private: boolean;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  license: {
    name: string;
  };
  open_issues_count: number;
  updated_at: string;
}

export interface ApiContextProps {
  fetchUserData: (username: string, token: string) => void;
  fetchRepoData: (username: string, token: string) => void;
  userData: UserData | null;
  repoData: RepoData[] | null;
  token: string;
  setToken: (token: string) => void;
  isLoading: {
    isRepoLoading: boolean;
    isUserLoading: boolean;
  };
  error: string;
  setError: (error: string) => void;
}

export const ApiContext = createContext({} as ApiContextProps);

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repoData, setRepoData] = useState<RepoData[] | null>(null);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState({
    isRepoLoading: false,
    isUserLoading: false,
  });

  const [error, setError] = useState("");

  const fetchUserData = async (username: string, token: string) => {
    setIsLoading({ isRepoLoading: false, isUserLoading: true });
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setUserData(data);
      setIsLoading({ isRepoLoading: false, isUserLoading: false });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError('Username does not exist');
      } else {
        setError('An error occurred, please check your token or internet connection and try again');
      }
      setIsLoading({ isRepoLoading: false, isUserLoading: false });
    }
  };

  const fetchRepoData = async (username: string, token: string) => {
    setIsLoading({ isRepoLoading: true, isUserLoading: false });
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setRepoData(data);
      setIsLoading({ isRepoLoading: false, isUserLoading: false });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError('Username does not exist');
      } else {
        setError('An error occurred, please check your token or internet connection and try again');
      }
      setIsLoading({ isRepoLoading: false, isUserLoading: false });
    }
  };

  return (
    <ApiContext.Provider
      value={{
        fetchUserData,
        fetchRepoData,
        userData,
        repoData,
        token,
        setToken,
        isLoading,
        error,
        setError,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
