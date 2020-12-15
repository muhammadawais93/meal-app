import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MealList from '../components/MealList';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function FavoritesScreen(props) {
    const favMeal = useSelector(state => state.meals.favoritesMeals);
    return (
        <MealList listData={favMeal} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => (
            <TouchableOpacity style={styles.burgerIcon} onPress={() => {
                navData.navigation.toggleDrawer();
            }}>
                <FontAwesome
                    name="bars"
                    size={24}
                    color="#fff"
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    burgerIcon: {
        paddingLeft: 10
    }
});
