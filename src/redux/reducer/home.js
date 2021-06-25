const initHome = {
  banner: [],
  destination: [],
  new: [],
  popular: [],
  recommended: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_DESTINATION') {
    return {
      ...state,
      destination: action.value,
    };
  }
  if (action.type === 'SET_BANNER') {
    return {
      ...state,
      banner: action.value,
    };
  }
  if (action.type === 'SET_NEW') {
    return {
      ...state,
      newTaste: action.value,
    };
  }
  if (action.type === 'SET_POPULAR') {
    return {
      ...state,
      popular: action.value,
    };
  }
  if (action.type === 'SET_RECOMMENDED') {
    return {
      ...state,
      recommended: action.value,
    };
  }
  return state;
};
