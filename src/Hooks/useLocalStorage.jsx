import { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem(itemName)) || initialValue
  );

  useEffect(() => {
    let parsedItem;
    const localStorageItem = localStorage.getItem(itemName);

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    setItem(parsedItem);
  }, []);

  const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  };

  return [item, saveItem];
}
