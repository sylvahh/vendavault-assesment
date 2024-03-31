import React from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;

type StorageType = 'localStorage' | 'sessionStorage';

function useStorage<T>(
  key: string,
  defaultValue: T,
  storageType: StorageType = 'localStorage'
): [T, SetValue<T>, () => void] {
  const [value, setStoredValue] = React.useState<T>(() => {
    let currentValue: T;

    try {
      currentValue = JSON.parse(window[storageType].getItem(key) || JSON.stringify(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  const setValue: SetValue<T> = (newValue) => {
    // Allow value to be a function to update state based on previous state
    const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
    // Update state
    setStoredValue(valueToStore);
    // Update storage
    window[storageType].setItem(key, JSON.stringify(valueToStore));
  };

  const deleteValue = React.useCallback(() => {
    window[storageType].removeItem(key);
    setStoredValue(defaultValue);
  }, [key, storageType, defaultValue]);

  React.useEffect(() => {
    window[storageType].setItem(key, JSON.stringify(value));
  }, [value, key, storageType]);

  return [value, setValue, deleteValue];
}

export default useStorage;
