import { useState } from "react";

export const localStorage = (keyName, defaultValue) => {
  const getValue = () => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  };
  const storedValue = getValue();
  const setValue = (newValue) => {
    window.localStorage.setItem(keyName, JSON.stringify(newValue));
    return newValue
  };
  return [storedValue, setValue];
};