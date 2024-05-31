import React, { useState } from "react";
import { UserContext } from "./UserContext";
import { UserProviderProps } from "./types";

const user = {
  id: 123,
  name: "Mateito Maggi Camero",
  pasword: "fsafnlsfdhlñ",
  email: "mateito@mail.com",
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <UserContext.Provider value={{ userName, setUserName, userPassword, setUserPassword, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
