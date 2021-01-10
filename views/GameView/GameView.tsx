import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, BackHandler } from "react-native";

const styles = StyleSheet.create({
    menuPage: {
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        paddingTop: 100
    },
    menuTitle: {
        color: "white",
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: "Calibri"
    },
    menuButtonsContainer: {
        marginVertical: 80,
        marginHorizontal: 40
    },
    separator: {
        padding: 10
    }
})

const Separator = () =>
    <View style={ styles.separator }></View>

export default function GameView(props) {
    return (
      <View style={ styles.menuPage }>
        <Text style={ styles.menuTitle }>Game</Text>
        <View style={ styles.menuButtonsContainer }>
            <Button
                title="Quit game"
                color="#339966"
                onPress={ props.backToMenuHandler }
            />
        </View>
      </View>
    );
};
