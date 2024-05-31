import { createContext } from "react";
import { UserContextType } from "./types";

export const UserContext = createContext<UserContextType>({
  userName: "",
  setUserName: () => {},
  userPassword: "",
  setUserPassword: () => {},
  user: {
    id: 0,
    name: "",
    pasword: "",
    email: "",
  },
});
