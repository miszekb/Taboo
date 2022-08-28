import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, BackHandler } from "react-native";

const styles = StyleSheet.create({
    roundStateBarContainer: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: "100%",
        height: "100px",
        padding: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    teamScore1: {
        fontSize: 20,
        color: "white",
        fontFamily: "Arial",
        padding: 7,
        backgroundColor: "orange",
        height: 50,
        width: 50,
        textAlign: "center",
        borderRadius: 10,
    },
    teamScore2: {
        fontSize: 20,
        color: "white",
        fontFamily: "Arial",
        padding: 7,
        backgroundColor: "blue",
        height: 50,
        width: 50,
        textAlign: "center",
        borderRadius: 10,
    },
    turnTimer: {
        fontSize: 20,
        fontFamily: "Arial",
        backgroundColor: "red",
        color: "white",
        padding: 7,
        textAlign: "center",
        width: 70,
        borderRadius: 10,
        height: 40
    }
})

export default function RoundStateBar(props) {
    // Find the distance between now and the count down date
    const [timeLeft, setTimeLeft] = useState(60);
    const [isRoundActive, setRoundActive] = useState(true);
    const [currentTeam, setCurrentTeam] = useState('blue');

    const isRunning = timeLeft > 0 && isRoundActive ? true : false;

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isRunning) {
                props.onTurnEnd();
                setRoundActive(false);
                setTimeLeft(60);
                clearInterval(interval);
                return;
            }

            setTimeLeft(timeLeft => timeLeft - 1);
            
        }, 1000);
        return (() => clearInterval(interval))
    }, [isRunning])

    const formatTimeLeft = (seconds: number) => {
        return `${Math.floor((seconds / 60)).toString()}:${(seconds % 60).toString()}${seconds === 60 ? '0' : ''}`;
    }

    return (
        <View style={ styles.roundStateBarContainer }>
            <View style={ styles.teamScore1 }>{props.teamsScore.orange}</View>
            <View style={ styles.turnTimer }>{formatTimeLeft(timeLeft)}</View>
            <View style={ styles.teamScore2 }>{props.teamsScore.blue}</View>
        </View>
    );
};
