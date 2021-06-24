const initNews = {
  news: [],
};

export const newsReducer = (state = initNews, action) => {
  if (action.type === 'SET_NEWS') {
    return {
      ...state,
      news: action.value,
    };
  }
  return state;
};
