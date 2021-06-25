const initCategory = {
  category: [],
  wisataAlam: [],
  wisataBuatan: [],
  wisataBudaya: [],
  kulinerKhas: [],
};

export const categoryReducer = (state = initCategory, action) => {
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.value,
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
