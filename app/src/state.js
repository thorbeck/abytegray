// state container
const useState = (key) => {
  const get = () =>
    sessionStorage.getItem(key)
      ? JSON.parse(sessionStorage.getItem(key))
      : null;
  const set = (value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  return Object.freeze({ get, set });
};

export { useState };
