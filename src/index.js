export const exportClient = (input) => {
  if (typeof window !== 'undefined') {
    Object.assign(window, input);
  }
};
