const TOKEN_KEY = "auth_token";

export const setSessionToken = (token: string) => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

export const getSessionToken = (): string | null => {
  return sessionStorage.getItem(TOKEN_KEY);
};

export const removeSessionToken = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
  return Boolean(getSessionToken());
};
