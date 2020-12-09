import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { FontAwesome } from '@expo/vector-icons';

export default function FavoritesScreen(props) {
    const favMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
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
