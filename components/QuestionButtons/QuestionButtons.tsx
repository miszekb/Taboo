import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, BackHandler } from "react-native";

const styles = StyleSheet.create({
    questionButtonsContainer: {
        backgroundColor: "white",
        height: "100px",
        width: "100%",
        padding: 20,
        bottom: "0",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    denyButton: {
        backgroundColor: "red",
        borderRadius: 10,
        height: 50,
        width: 50,
    },
    skipButton: {
        backgroundColor: "grey",
        borderRadius: 10,
        height: 50,
        width: 50,
    },
    approveButton: {
        backgroundColor: "green",
        borderRadius: 10,
        height: 50,
        width: 50,
    },
})

export default function QuestionButtons(props) {
    return (
        <View style={ styles.questionButtonsContainer }>
            <View style={ styles.denyButton } onTouchEnd={() => props.denyAnswer()}/>
            <View style={ styles.skipButton } onTouchEnd={() => props.switchQuestion()}/>
            <View style={ styles.approveButton } onTouchEnd={() => props.approveAnswer()}/>
        </View>
    );
};
