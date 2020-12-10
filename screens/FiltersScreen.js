import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.innerTitle}>{props.title}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor=''
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
}
export default function FiltersScreen(props) {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVagetarian, setIsVagetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            GlutenFree: isGlutenFree,
            LactoseFree: isLactoseFree,
            Vegan: isVegan,
            Vagetarian: isVagetarian
        }
    }, [isGlutenFree, isLactoseFree, isVegan, isVagetarian]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch title="Gulten Free" state={isGlutenFree} onChange={newVal => setIsGlutenFree(newVal)} />
            <FilterSwitch title="Lactose Free" state={isLactoseFree} onChange={newVal => setIsLactoseFree(newVal)} />
            <FilterSwitch title="Vagen Free" state={isVegan} onChange={newVal => setIsVegan(newVal)} />
            <FilterSwitch title="Vagetarian Free" state={isVagetarian} onChange={newVal => setIsVagetarian(newVal)} />
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Screens',
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
        ),
        headerRight: () => (
            <TouchableOpacity style={styles.saveIcon} onPress={navData.navigation.setParams('save')}>
                <FontAwesome
                    name="save"
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
        alignItems: 'center'
    },
    burgerIcon: {
        paddingLeft: 10,
    },
    saveIcon: {
        paddingRight: 10,
    },
    title: {
        fontFamily: 'open-sens-bold',
        fontSize: 26,
        margin: 20,
        textAlign: 'center'
    },
    innerTitle: {
        fontFamily: 'open-sens-bold',
        fontSize: 18,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginVertical: 10
    }
});
