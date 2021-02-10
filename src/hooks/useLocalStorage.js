import { useState } from 'react'



 export const useLocalStorage = (key, initialValue) => {

//State------------------------------------------------------------
const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });
//Setter Function-------------------------------------------------
const setValue = value => {
    //Update State--
    setStoredValue(value)
    //Update Local Storage--
    window.localStorage.setItem(key, JSON.stringify(value))
}
//Value returned from Local Storage (dark mode in this case)------------------
  return [storedValue, setValue]
}

