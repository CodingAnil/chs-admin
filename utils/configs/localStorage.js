

// Local Storage functions (client-side only)
export const getLocalData = (key) => {
  if (typeof window !== "undefined") {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error);
      return null;
    }
  }
  return null;
};

export const setLocalData = (key, payload) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, JSON.stringify(payload));
    } catch (error) {
      console.error(`Error setting ${key} in localStorage:`, error);
    }
  }
};

export const removeLocalItem = (key) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error);
    }
  }
};

export const clearLocals = () => {
  if (typeof window !== "undefined") {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  }
};

// Client-side Cookie functions
export const getClientCookie = (name) => {
  if (typeof document !== "undefined") {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      try {
        return JSON.parse(decodeURIComponent(parts.pop().split(";").shift()));
      } catch (error) {
        console.error(`Error parsing cookie "${name}":`, error);
        return undefined;
      }
    }
  }
  return undefined;
};

export const setClientCookie = (name, value, options = {}) => {
  if (typeof document !== "undefined") {
    const { days = 7, path = '/', ...rest } = options;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const cookieValue = encodeURIComponent(JSON.stringify(value));
    const cookieString = `${name}=${cookieValue}; ${expires}; path=${path}`;
    document.cookie = Object.entries(rest).reduce((acc, [key, val]) => `${acc}; ${key}=${val}`, cookieString);
  }
};

export const removeClientCookie = (name, path = '/') => {
  if (typeof document !== "undefined") {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
  }
};

// Universal storage functions
export const getData = (key) => {
  return getLocalData(key) || getClientCookie(key);
};

export const setData = (key, value, options = {}) => {
  setLocalData(key, value);
  setClientCookie(key, value, options);
};

export const removeData = (key) => {
  removeLocalItem(key);
  removeClientCookie(key);
};

export const clearAllData = () => {
  clearLocals();
  // Clear all cookies
  if (typeof document !== "undefined") {
    document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });
  }
};