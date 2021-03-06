// The action creators
export const increment = () => ({ type: "INC" });
export const decrement = () => ({ type: "DEC" });
export const reset = () => ({ type: "RESET" });

export const update = title => ({
  type: 'UPDATE',
  title,
})