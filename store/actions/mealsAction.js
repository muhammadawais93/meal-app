export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggoleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        mealid: id
    }
}