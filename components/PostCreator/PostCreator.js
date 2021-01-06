import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Fade from 'react-native-fade'
import shortid from 'shortid';


export default class PostCreator extends React.Component {
    
    state = {
        id: '',
        title: '',
        content: '',
        country: ''
    }

    titleChangeHandler = (event) => {
        this.setState({title: event})
    }

    contentChangeHandler = (event) => {
        this.setState({content: event})
    }

    componentDidMount = () => {
        fetch('https://freegeoip.live/json/')
        .then((response) => response.json())
        .then((responseJson) => {
          let countryCode = ''
          countryCode = responseJson.country_code.toLowerCase();
          this.setState({country : countryCode})
         // alert(this.state.country)
        })
        .catch((error) => {
          alert("Error determining your country!")
        });
    }

    buttonConfirmHandler = () => {
        alert('Your Post has been added!')
     
        if(this.state.title.length !== '' && this.state.content.length !== '') {
            this.state.id = shortid.generate();
            this.props.clicked({
                id: this.state.id,
                title: this.state.title,
                content: this.state.content,
                country: this.state.country
            })
        }
    }

      render () {
          return (
              <View style={stylesCreator.container}>
                  <Text style={stylesCreator.title}>Add Post</Text>
                  <Text style={stylesCreator.text}>Title</Text>
                  <TextInput
                      style={stylesCreator.inputTitle}
                      onChangeText = {this.titleChangeHandler}
                      placeholder = 'Post title...'
                          />
                  <Text style={stylesCreator.text}>Content</Text>
                  <TextInput
                      style={stylesCreator.inputContent}
                      onChangeText = {this.contentChangeHandler} 
                      placeholder = 'Post content...'
                  />   
                  <View style={stylesCreator.buttonConfirm}>
                      <Button
                      title="Confirm"
                      onPress={this.buttonConfirmHandler}
                      color='#61201d'
                      />
                  </View>
              </View>
          )
      }
}

const stylesCreator = StyleSheet.create({
    container: {
        borderBottomColor: 'white',
        backgroundColor: '#ac514e'
    },
    text : {
      color: 'white',
      flexDirection: 'row',
      marginLeft: 5
    },
    title : {
        color: 'white',
        fontSize: 30,
        backgroundColor: '#61201d',
        padding: 10,
        marginBottom: 10
      },
    inputTitle : {
      height: 40, 
      width: 330, 
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      marginBottom: 10,
      padding: 10
    },
    inputContent : {
      height: 40, 
      width: 330, 
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      marginBottom: 10,
      padding: 10
    },
    buttonConfirm : {
      fontSize: 40,
      padding: 10,
    }
  });