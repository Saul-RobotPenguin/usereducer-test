export function reducer(state, action) {
  switch (action.type) {
    case "increment by 30":
      return { count: state.count + 30 };
    case "decrement by 30":
      return { count: state.count - 30 };
    case "reset to zero":
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
}
