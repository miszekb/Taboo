import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, BackHandler } from "react-native";

const styles = StyleSheet.create({
    wordCardContainer: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        margin: "auto",
        marginTop: 40,
        width: "80%",
        height: "50vh",
        borderRadius: 15,
        textAlign: "center"
    },
    keyword: {
        fontSize: 27,
        color: "white",
        padding: 13,
        marginBottom: 10,
        backgroundColor: "grey",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    forbiddenWord: {
        marginTop: 10,
        fontSize: 25,
    },
    separator: {
        padding: 10
    }
});

const Separator = () =>
    <View style={ styles.separator }></View>

export default function WordCard(props) {
    return (
        <View style={ styles.wordCardContainer }>
            <Text style={ styles.keyword }>{props.keyword}</Text>
            <Text style={ styles.forbiddenWord }>{props.forbiddenWords[0]}</Text>
            <Text style={ styles.forbiddenWord }>{props.forbiddenWords[1]}</Text>
            <Text style={ styles.forbiddenWord }>{props.forbiddenWords[2]}</Text>
            <Text style={ styles.forbiddenWord }>{props.forbiddenWords[3]}</Text>
            <Text style={ styles.forbiddenWord }>{props.forbiddenWords[4]}</Text>
        </View>
    );
};
