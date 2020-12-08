import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { FontAwesome } from '@expo/vector-icons';

export default function MealDetailScreen(props) {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go back"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <TouchableOpacity style={styles.starIcon} onPress={() => { }}>
                <FontAwesome
                    name="star"
                    size={24}
                    color="#fff"
                />
            </TouchableOpacity>
        ),
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    starIcon: {
        paddingRight: 8
    }
});
