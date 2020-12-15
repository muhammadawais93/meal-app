import React, { useEffect } from 'react';
import { ScrollView, View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    );
}
export default function MealDetailScreen(props) {
    const availableMeals = useSelector(state => state.meals.meals);

    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    useEffect(() => {
        props.navigation.setParams({mealTitle: selectedMeal.title});
    }, []);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.detail}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordablity.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredient</Text>
            {selectedMeal.ingredients.map(((ingredient, index) => (
                <ListItem style={styles.ingredients} key={index}>{ingredient}</ListItem>
            )))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(((step, index) => (
                <ListItem style={styles.ingredients} key={index}>{step}</ListItem>
            )))}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');

    return {
        headerTitle: mealTitle,
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
    title: {
        fontFamily: 'open-sens-bold',
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 200,
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    starIcon: {
        paddingRight: 8
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        fontFamily: 'open-sens',
    }
});
