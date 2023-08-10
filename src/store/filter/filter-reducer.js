import { ADD_FILTER } from "./filter-actions";
import { REMOVE_FILTER } from "./filter-actions";
import { CLEAR_FILTER } from "./filter-actions";
export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      return [...state, action.filters];
    }
    case REMOVE_FILTER: {
      return state.filter((item) => item !== action.filters);
    }

    case CLEAR_FILTER: {
      return [];
    }
    default: {
      return state;
    }
  }
};
