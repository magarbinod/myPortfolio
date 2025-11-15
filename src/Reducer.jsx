
export const skillsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SKILLS":
      return {
        ...state, // keep existing state
        ...action.payload, // overwrite with fetched data
      };
    default:
      return state; // return current state for unknown actions
  }
};
