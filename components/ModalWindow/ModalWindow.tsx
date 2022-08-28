import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, BackHandler } from "react-native";

const styles = StyleSheet.create({
    modalBackground: {
        backgroundColor: "rgba(0.0, 0.0, 0.0, 0.7)",
        height: "100vh",
        width: "100vw",
        padding: 20,
        top: 0,
        left: 0,
        position: "absolute",
        zIndex: 2,
    },
    modalContainer: {
        backgroundColor: "white",
        padding: "30px",
        position: "absolute",
        top: "50%",
        left: "50%",
        color: "black",
        height: "200px",
        width: "300px",
        borderRadius: 15,
        transform: "translate(-50%, -50%)",
        textAlign: "center",
    },
    modalButton: {
        backgroundColor: "red",
        fontWeight: "bold",
        color: "white",
        padding: "10px",
        marginTop: "80px",
        margin: "auto",
        borderRadius: 15,
        textAlign: "center",
        width: "50%"
    }
})

export default function ModalWindow(props) {
    return (
        <View style={ styles.modalBackground }>
            <View style={ styles.modalContainer }>
                Round has finished!
                Now it's other team's turn.
                <View style={ styles.modalButton } onTouchEnd={ () => props.onButtonClick() }>Go!</View>
            </View>
        </View>
    );
};
