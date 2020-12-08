import React from 'react';
import { View, Text, Platform, TouchableNativeFeedback, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGridTile = props => {
    let TouchableCamp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCamp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCamp onPress={props.onSelect} style={styles.IOS}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableCamp>
        </View>
    );
}

const styles = StyleSheet.create({
    IOS: {
        flex: 1,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // overflow: 'hidden'
    },
    title: {
        fontFamily: 'open-sens-bold',
        fontSize: 20,
        textAlign: 'right'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2.
        },
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15
    }
});

export default CategoryGridTile;