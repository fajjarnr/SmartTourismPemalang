const initHome = {
  banner: [],
  destination: [],
  new: [],
  popular: [],
  wisataAlam: [],
  wisataBuatan: [],
  wisataBudaya: [],
  kulinerKhas: [],
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
  if (action.type === 'SET_WISATA_ALAM') {
    return {
      ...state,
      wisataAlam: action.value,
    };
  }
  if (action.type === 'SET_WISATA_BUATAN') {
    return {
      ...state,
      wisataBuatan: action.value,
    };
  }
  if (action.type === 'SET_WISATA_BUDAYA') {
    return {
      ...state,
      wisataBudaya: action.value,
    };
  }
  if (action.type === 'SET_KULINER_KHAS') {
    return {
      ...state,
      kulinerKhas: action.value,
    };
  }
  return state;
};
