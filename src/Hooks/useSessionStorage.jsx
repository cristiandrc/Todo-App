import { useState, useEffect } from "react";

const itemName = "TOKEN";

const useSessionStorage = () => {
  const [auth, setAuth] = useState({ isAuth: false, token: null, user: null });

  useEffect(() => {
    const token = sessionStorage.getItem(itemName);
    if (token) {
      setAuth(JSON.parse(token));
    }
  }, []);

  const saveAuth = (data) => {
    sessionStorage.setItem(itemName, JSON.stringify(data));
    setAuth(data);
  };

  return [auth, saveAuth];
};

export default useSessionStorage;
