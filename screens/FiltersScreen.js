import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function FiltersScreen() {
    return (
        <View style={styles.screen}>
            <Text>filter screen</Text>
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
        paddingLeft: 10,
    }
});
