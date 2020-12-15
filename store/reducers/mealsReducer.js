import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/mealsAction';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoritesMeals: []
}

// state = initialState
// assign defalut value to state argument.
const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.filteredMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.filteredMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favoritesMeals: updatedFavMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoritesMeals: state.favoritesMeals.concat(meal) }
            }
        default:
            return state;
    }
}

export default mealsReducer;