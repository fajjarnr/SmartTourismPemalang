const initCategory = {
  category: [],
  wisataAlam: [],
  wisataBuatan: [],
  wisataReligi: [],
  kulinerKhas: [],
  hotel: [],
  desaWisata: [],
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
  if (action.type === 'SET_WISATA_RELIGI') {
    return {
      ...state,
      wisataReligi: action.value,
    };
  }
  if (action.type === 'SET_DESA_WISATA') {
    return {
      ...state,
      desaWisata: action.value,
    };
  }
  if (action.type === 'SET_HOTEL') {
    return {
      ...state,
      hotel: action.value,
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
