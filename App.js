import React from 'react';
import { StyleSheet, View, Button  } from 'react-native';
import Login from './pages/Login'
import Posts from './pages/Posts/Posts'

export default class App extends React.Component {

  state = {
    isLogged: false
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

  }

  logInHandler = () => {
    this.setState({isLogged: true})
    alert('You are now logged in!')
  }

  logOutHandler = () => {
    this.setState({isLogged: false})
    alert('You are now logged out!')
  }

  render () {
    return (
      <View style={styles.container}>
       {
         this.state.isLogged ? 
         <View style={styles.contentContainer}>
         <Posts logOutHandler = {this.logOutHandler.bind(this)}/>
        </View>
         : <Login logInHandler = {this.logInHandler.bind(this)}/>
       }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  text : {
    color: 'white',
    flexDirection: 'row'
  },
  contentContainer : {
    marginTop: 50
  }
});
