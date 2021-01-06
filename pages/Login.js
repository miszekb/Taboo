import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, BackHandler, TouchableHighlight } from 'react-native';
import {db} from '../config'
import { getLocation, getData } from 'react-native-weather-api';

let usersRef = db.ref('/users');

export default class Login extends React.Component {
  
    state = {
      users_buffer: [],        
      currentPassword: '',
      currentUsername: '',
      cityName: '',
      temperature: '',
      weatherIcon: ''
    };
    
    componentDidMount () {
      getLocation();
      let cityName = '';
      let temperature = '';
      let weatherIcon = '';

      setTimeout(() => {    
        let data = new getData()
        cityName = data.city;
        temperature = data.tempC;
        weatherIcon = data.icon;
        this.setState({
          cityName : cityName,
          temperature : temperature,
          weatherIcon : weatherIcon
        })
        },4000);

      usersRef.on('value', snapshot => {
        let data = snapshot.val();
        if (data !== undefined && data !== null)
        {
          let users_buffer = Object.values(data);
          this.setState({users_buffer})
        }
      })
    }

    loginButtonHandler = () => {
        this.state.users_buffer.map(user => {
          if(this.state.currentUsername === user.nickname) {
            const foundUser = user;
            if(this.state.currentPassword === foundUser.password) 
              this.props.logInHandler();
            else alert('Wrong password!')
          }
        })
    }

  usernameChangeHandler = (event) => {this.setState({currentUsername: event});}
  passwordChangeHandler = (event) => {this.setState({currentPassword: event});}

  addUser = (user) => {this.setState({users: [user, ...this.state.users]});}
  quitAppHandler = () => {BackHandler.exitApp();}

  renderWeatherData = () => {
    return (
     
      <View style={stylesLogin.weatherContainer}>
       {this.state.temperature !== '' ? 
          <View>
            <Text style={stylesLogin.textWeather}>{this.state.cityName}</Text>
            <Text style={stylesLogin.textWeather}>{this.state.temperature + ' \u00B0C'}</Text>
            <Image style={{width: 80, height: 80, position: 'absolute', right: 12, bottom: 0}} source = {{uri: this.state.weatherIcon}}/>
          </View>:
            <Text style={stylesLogin.textWeather}>Loading..</Text>}
      </View>
    
    );
  }

  render () {
    return (
    <View>
     <TouchableHighlight onPress={this.quitAppHandler}>
        <Image
            style={{width: 40, height: 40, alignSelf: 'center', marginTop: 100, marginLeft: 280}}
            source= {{uri: 'https://i.imgur.com/w1ttARV.png'}}
        />
     </TouchableHighlight>
      
      <Image
          style={{width: 130, height: 130, alignSelf: 'center', marginTop: 40}}
          source= {{uri: 'https://i.imgur.com/erbhv3k.png'}}
        />
      <Text style={stylesLogin.text}>Username</Text>
      <TextInput
            style={stylesLogin.input}
            textContentType = 'username' 
            onChangeText = {this.usernameChangeHandler}
            placeholder = 'Your username..'
            />
      <Text style={stylesLogin.text}>Password</Text>
      <TextInput
            style={stylesLogin.input}
            textContentType = 'password'
            onChangeText = {this.passwordChangeHandler} 
            placeholder = 'Your password..'
            autoCompleteType = 'password'
            secureTextEntry={true}
            />   
      <View style={stylesLogin.buttonLogIn}>
        <Button
          title="Log In"
          onPress={this.loginButtonHandler}
        />
        </View>
        {this.renderWeatherData()}
    </View>
  );
  }
}

const stylesLogin = StyleSheet.create({
    text : {
      color: 'white',
      flexDirection: 'row',
      marginLeft: 10
    },
    weatherContainer : {
      marginBottom: 120,
      backgroundColor: "#7eb4dd",
      padding: 10,
      marginHorizontal: 10,
      marginTop: 12
    },
    textWeather : {
      color: 'white',
      fontSize: 30
    },
    title : {
        color: 'white',
        fontSize: 30,
        backgroundColor: '#61201d',
        padding: 10,
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 50
      },
    input : {
      height: 40, 
      width: 300, 
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      marginBottom: 18,
      marginLeft: 10,
      padding: 10
    },
    buttonLogIn : {
      fontSize: 40,
      padding: 10,
      marginBottom: 20,
    }
  });