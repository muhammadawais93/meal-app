import Meals from '../../models/Meal';

const initialState = {
    meals: Meals,
    filteredMeals: Meals,
    favoritesMeals: []
}

// state = initialState
// assign defalut value to state argument.
const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer;