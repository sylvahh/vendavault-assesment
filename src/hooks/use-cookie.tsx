import React from 'react';
import Cookies from 'js-cookie';
import CookieAttributes from 'js-cookie';

type SetValue<T> = (value: T | ((val: T) => T)) => void;
type Options = typeof CookieAttributes.attributes;

function useCookie<T>(key: string, defaultValue: T, options: Options = {}): [T, SetValue<T>, () => void] {
  const [value, setValue] = React.useState<T>(() => {
    let currentValue: T | undefined;

    try {
      const cookieValue = Cookies.get(key);
      currentValue = cookieValue ? JSON.parse(cookieValue) : defaultValue;
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue as T;
  });

  const deleteCookie = React.useCallback(() => {
    Cookies.remove(key);
    setValue(defaultValue);
  }, [key, defaultValue]);

  React.useEffect(() => {
    Cookies.set(key, JSON.stringify(value), options);
  }, [value, key, options]);

  return [value, setValue, deleteCookie];
}

export default useCookie;
