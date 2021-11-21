import { useState } from "react";

const itemName = "TOKEN";

const useSessionStorage = () => {
  const token = JSON.parse(sessionStorage.getItem(itemName)) || {
    isAuth: false,
    token: null,
    user: null,
  };
  const [auth, setAuth] = useState(token);
  const saveAuth = (data) => {
    sessionStorage.setItem(itemName, JSON.stringify(data));
    setAuth(data);
  };

  const deleteAuth = () => {
    sessionStorage.removeItem(itemName);
    setAuth({ isAuth: false, token: null, user: null });
  };
  return [auth, saveAuth, deleteAuth];
};

export default useSessionStorage;
