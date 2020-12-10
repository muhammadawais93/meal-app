import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultNavStackOption = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'open-sens-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sens',
        fontSize: 14
    }
}
const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultNavStackOption
    }
);

const FavNaivagtor = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultNavStackOption
    }
);

const MealsTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
        },
        Filter: {
            screen: FavNaivagtor,
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Meals') {
                    iconName = focused
                        ? 'ios-restaurant'
                        : 'ios-restaurant';
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

const FilterNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: defaultNavStackOption
    }
);

const MainNavigator = createDrawerNavigator(
    {
        MealsFav: {
            screen: MealsTabNavigator, navigationOptions: {
                drawerLabel: 'Meals',
            }
        },
        Filters: {
            screen: FilterNavigator, navigationOptions: {
                drawerLabel: 'Favorites',
            }
        }
    }, 
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            lableStyle: {
                fontFamily: 'open-sens-bold'
            }
        }
    }
);

export default createAppContainer(MainNavigator);