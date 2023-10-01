export interface AuthStateProps {
  token: string | null;
  setToken: (token: string | null) => void;
  name: string | null;
  setName: (email: string | null) => void;
  email: string | null;
  setEmail: (email: string | null) => void;
}

export interface UserProps {
  token: string;
  email: string;
  name: string;
}
