const initHome = {
  destination: [],
  new: [],
  popular: [],
  recommended: [],
  banner: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_DESTINATION') {
    return {
      ...state,
      destination: action.value,
    };
  }
  if (action.type === 'SET_RECOMMENDED') {
    return {
      ...state,
      recommended: action.value,
    };
  }
  if (action.type === 'SET_NEW') {
    return {
      ...state,
      new: action.value,
    };
  }
  if (action.type === 'SET_POPULAR') {
    return {
      ...state,
      popular: action.value,
    };
  }
  if (action.type === 'SET_BANNER') {
    return {
      ...state,
      banner: action.value,
    };
  }
  return state;
};
