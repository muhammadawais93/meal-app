import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const MealsTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            // navigationOptions: {
            //     tabBarOptions: (tabInfo) => {
            //         return <Ionicons name="ios-restaurant" size={24} color="black" />
            //     }
            // }
        },
        Favorites: {
            screen: FavoritesScreen,
            // navigationOptions: {
            //     tabBarOptions: (tabInfo) => {
            //         return <Ionicons name="ios-star" size={24} color="black" />
            //     }
            // }
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Meals') {
                    console.log(focused);
                    iconName = focused
                        ? 'ios-restaurant'
                        : 'ios-restaurant-outline';
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Favorites') {
                    iconName = focused ? 'ios-star' : 'ios-star-outline';
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            showIcon: true,
            activeTintColor: Colors.accentColor,
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(MealsTabNavigator);