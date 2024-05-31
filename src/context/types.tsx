import { ReactNode } from "react";

export type user = {
  id: number | null;
  name: string | null;
  pasword: string | null;
  email: string | null;
};

export interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  userPassword: string;
  setUserPassword: (name: string) => void;
  user: user;
}
export interface UserProviderProps {
  children: ReactNode;
}
