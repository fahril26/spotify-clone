export const setKeyHistory = () => {
  const key = window.history.state.key;
  sessionStorage.setItem("history-key", key);
};
