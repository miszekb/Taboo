import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class Posts extends React.Component {
    render () {
        return (
            <View style={stylesPost.postContainer}>
                <Text style={stylesPost.postTitle}>{this.props.title}</Text>
                    <Text style={stylesPost.postContent}>{this.props.content}</Text>
                    <Image 
                        style={{width: 50, height: 25, marginBottom: 5, position: 'absolute', right: 20, bottom: 30}}
                        source= {{uri: 'https://www.countryflags.io/'+ this.props.country +'/flat/64.png'}}/>
                <Button title = 'X' onPress={this.props.clicked} color="#b46b67"/>
            </View>
        )
    }
}

const stylesPost = StyleSheet.create({

    postContainer : {
        backgroundColor: '#7D322E',
        width:  300,
        height: 100,
        margin: 10,
        marginTop: 15,
        marginBottom: 15
    },
    postTitle : {
        color: 'white',
        flexDirection: 'row',
        fontSize: 20,
        padding: 10,
    },
    postContent : {
        color: 'white',
        flexDirection: 'row',
        fontSize: 13,
        padding: 7,
    },
  });