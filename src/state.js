// state container
const useState = (key) => {
  const get = () =>
    sessionStorage.getItem(key)
      ? JSON.parse(sessionStorage.getItem(key))
      : null;
  const set = (value) => {
    if (!get()) {
      sessionStorage.setItem(key, JSON.stringify(value));
      sessionStorage.setItem(`${key}_dt`, new Date().toISOString());
    }
  };

  return Object.freeze({ get, set });
};

export { useState };
