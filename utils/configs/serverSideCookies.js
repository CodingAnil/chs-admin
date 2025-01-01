// Server-side Cookie functions

import { cookies } from "next/headers";

export const getServerCookie = (name) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(name);
  if (cookie) {
    try {
      return JSON.parse(cookie.value);
    } catch (error) {
      console.error(`Error parsing cookie "${name}":`, error);
      return undefined;
    }
  }
  return undefined;
};

export const setServerCookie = (name, value, options = {}) => {
  const cookieStore = cookies();
  cookieStore.set(name, JSON.stringify(value), options);
};

export const removeServerCookie = (name) => {
  const cookieStore = cookies();
  cookieStore.delete(name);
};
