import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, BackHandler, SliderBase } from "react-native";

const styles = StyleSheet.create({
    settingsPage: {
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        paddingTop: 100
    },
    settingsTitle: {
        color: "white",
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: "Calibri"
    }
})

export default function SettingsView(props) {
    return (
      <View style={ styles.settingsPage }>
        <Text style={ styles.settingsTitle }>Settings</Text>
            <Button
                title="Back"
                onPress= { props.backToMenuHandler }
                color="#339966"
            />
      </View>
    );
};
