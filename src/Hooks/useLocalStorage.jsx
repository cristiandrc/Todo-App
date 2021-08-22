import React, { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const saveItem = (newTodos) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  return [item, saveItem, loading, error];
}
