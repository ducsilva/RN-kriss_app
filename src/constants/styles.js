import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        shadowOffset: {width: 5, height: 5},
        width: '90%',
        borderRadius: 12,
        alignSelf: 'center',
        marginBottom: 10,
    },
    cardCover: {
        width: 350,
        height: 190,
        alignSelf: 'center',
    }
});

export default styles;