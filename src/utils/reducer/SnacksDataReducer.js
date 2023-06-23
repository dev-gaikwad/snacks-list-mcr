export const initialState = {
  allSnacks: [],
  filters: {
    searchQuery: '',
    idSort: 'descending',
    nameSort: 'descending',
    weightSort: 'descending',
    priceSort: 'descending',
    caloriesSort: 'descending',
  },
};

export const snacksReducer = (state, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS':
      return { ...state, allSnacks: action.payload };

    case 'ID_SORT':
      return {
        ...state,
        filters: { ...state.filters, idSort: action.payload },
      };
    case 'NAME_SORT':
      return {
        ...state,
        filters: { ...state.filters, nameSort: action.payload },
      };
    case 'WEIGHT_SORT':
      return {
        ...state,
        filters: { ...state.filters, weightSort: action.payload },
      };
    case 'PRICE_SORT':
      return {
        ...state,
        filters: { ...state.filters, priceSort: action.payload },
      };
    case 'CALORIES_SORT':
      return {
        ...state,
        filters: { ...state.filters, caloriesSort: action.payload },
      };

    default:
      return state;
  }
};
