import {
  SEARCH_PRODUCTS,
  UPDATE_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_PRICE_RANGE,
  SORT_BY_RATING,
  FILTER_BY_SECTION,
  FILTER_BY_CATEGORY,
  CLEAR_FILTERS,
} from "../utils/constsant";

import {
  searchProducts,
  updateProducts,
  sortProducts,
  updatePriceRange,
  sortByRating,
  filterBySection,
  filterByCategory,
  clearFilters,
} from "../utils/filteraction";

const filterReducer = (state, action) => {
    switch (action.type) {
      case SEARCH_PRODUCTS:
        return searchProducts(state, action.payload);
      case UPDATE_PRODUCTS:
        return updateProducts(state, action);
      case SORT_PRODUCTS:
        return sortProducts(state, action.payload);
      case UPDATE_PRICE_RANGE:
        return updatePriceRange(state, action.payload);
      case SORT_BY_RATING:
        return sortByRating(state, action.payload);
      case FILTER_BY_SECTION:
        return filterBySection(state, action.payload);
      case FILTER_BY_CATEGORY:
        return filterByCategory(state, action.payload);
      case CLEAR_FILTERS:
        return clearFilters(state);
      default:
        return state;
    }
  };

  export { filterReducer};
