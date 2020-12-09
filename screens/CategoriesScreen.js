import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { FontAwesome } from '@expo/vector-icons';

export default function CategoriesScreen(props) {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
                props.navigation.navigate('CategoryMeals', {
                    categoryId: itemData.item.id
                })
            }} />
        );
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    burgerIcon: {
        paddingLeft: 10
    }
});

