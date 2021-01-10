import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, BackHandler } from "react-native";

import GameView from '../GameView/GameView';
import SettingsView from '../SettingsView/SettingsView';

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
        padding: 30
    }
})

const Separator = () =>
    <View style={ styles.separator }></View>

export default function MenuView() {

    const [chosenOption, setOption] = useState(null);

    if (chosenOption === "start") {
        return <GameView backToMenuHandler={ () => setOption(null) }/>
    } else if (chosenOption === "settings") {
        return <SettingsView backToMenuHandler={ () => setOption(null) }/>
    }

    return (
      <View style={ styles.menuPage }>
        <Text style={ styles.menuTitle }>Taboo</Text>
        <View style={ styles.menuButtonsContainer }>
            <Button
                title="Start game"
                color="#339966"
                onPress={ () => setOption("start") }
            />
            <Separator/>
            <Button
                title="Settings"
                color="#339966"
                onPress={ () => setOption("settings") }
            />
            <Separator/>
            <Button
                title="Quit"
                color="#339966"
                onPress={ BackHandler.exitApp }
            />
        </View>
      </View>
    );
};
