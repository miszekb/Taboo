import React from 'react';
import { View, StyleSheet } from "react-native";
import QuestionButtons from '../../components/QuestionButtons/QuestionButtons';
import RoundStateBar from '../../components/RoundStateBar/RoundStateBar';
import WordCard from '../../components/WordCard/WordCard';
import { connect } from 'react-redux';

import { handleReceiveQuestions } from '../../store/actions/questions';
import { Question } from '../../api';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

const styles = StyleSheet.create({
    menuPage: {
        backgroundColor: "black",
        width: "100%",
        height: "100vh"
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
});

const ROUND_DURATION = 1000;

interface GameViewState {
    currentQuestion?: Question | null,
    currentTeam: string,
    displayModal: boolean,
    teamsScore: {
        [key: string]: number
    }
}

class GameView extends React.Component {
    state: GameViewState = {
        currentQuestion: null,
        currentTeam: 'orange',
        displayModal: false,
        teamsScore: {
            'orange': 0,
            'blue': 0
        }
    }

    async componentDidMount(): void {
        await this.props.dispatch(handleReceiveQuestions())
        this.chooseQuestion();
    }

    chooseQuestion() {
        //TODO: implement random number picking
        if (Object.keys(this?.props?.questions).length > 0) {
            const currentQuestionID = this.state.currentQuestion?.id || '1';
            this.setState({
                ...this.state,
                currentQuestion: this.props.questions[parseInt(currentQuestionID) % 3 + 1]
            });
        }
    }

    switchTeams() {
        this.setState({...this.state, displayModal: false, currentTeam: 'blue'}, this.chooseQuestion);
    }

    approveAnswer() {
        const { currentTeam } = this.state;
        this.setState({
            ...this.state,
            teamsScore: {
                ...this.state.teamsScore,
                [currentTeam]: this.state.teamsScore[currentTeam] + 1
            }
        }, this.chooseQuestion);
    }

    denyAnswer() {
        const { currentTeam } = this.state;
        this.setState({
            ...this.state,
            teamsScore: {
                ...this.state.teamsScore,
                [currentTeam]: this.state.teamsScore[currentTeam] - 1
            }
        }, this.chooseQuestion);
    }

    render() {
        const { currentQuestion, teamsScore, displayModal } = this.state;
        console.log(currentQuestion);
        return (
            <>
                {displayModal ? <ModalWindow onButtonClick={this.switchTeams.bind(this)}/> : null}
                <View style={ styles.menuPage }>
                    <RoundStateBar
                        teamsScore={teamsScore}
                        onTurnEnd={() => this.setState({ ...this.state, displayModal: true })}
                    />
                    { currentQuestion ?
                        <WordCard
                            keyword={currentQuestion.keyword}
                            forbiddenWords={currentQuestion.forbiddenWords}
                        />: null
                    }
                    <QuestionButtons
                        switchQuestion={this.chooseQuestion.bind(this)}
                        approveAnswer={this.approveAnswer.bind(this)}
                        denyAnswer={this.denyAnswer.bind(this)}
                    />
                </View>
            </>
        );
    }
};

const mapStateToProps = (state: Record<string, any>) => {
    console.log(state.questions);
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(GameView);