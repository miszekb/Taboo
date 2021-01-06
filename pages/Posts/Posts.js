import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Post from '../../components/Post/Post'
import PostCreator from '../../components/PostCreator/PostCreator'

import {db} from '../../config'
let postsRef = db.ref('/posts')

export default class Posts extends React.Component {

    state = {
        posts: [],
        showCreator: false
    }

    componentDidMount() {
        postsRef.on('value', snapshot => {
            let data = snapshot.val();
            if (data !== undefined && data !== null)
            {
                let posts = Object.values(data);
                this.setState({posts})
            }
        })
    }

    logOutButtonHandler = () => {
        this.props.logOutHandler();
    }

    deletePost = (key) => {
       this.setState({ posts : this.state.posts.filter((post) => {post.id !== key })})
       db.ref('/posts').child(key).remove();
    }

    addPost = (post) => {
        this.setState({
            posts: [post, ...this.state.posts]
        })
        db.ref('/posts').child(post.id).set(post);
    }

    showCreatorHandler = () => {this.setState({showCreator : true})}
    hideCreatorHandler = () => {this.setState({showCreator : false})}

    renderExamplePosts = () => {
        return (
            <View>
                <Post title = 'Nowy pościk'  />
                <Post title = 'Nowy pościk' content = 'To jest mój najnowszy pościk' />
                <Post title = 'Nowy pościk' content = 'To jest mój najnowszy pościk'/>
            </View>
        )
    };

    render () {
        const stateReverse = this.state.posts.reverse();
        return (
            <View style={stylesPosts.container}>
             {this.state.showCreator ? 
            <View>
              <PostCreator clicked = {this.addPost}/>
              <Button title="Hide" 
                onPress={this.hideCreatorHandler}
                color = '#61201d'
              />
            </View> :  
            <View style={stylesPosts.buttons}>
                <View style={stylesPosts.buttonWrapper}>
                 <Button 
                    title="Add New Post" 
                    onPress={this.showCreatorHandler}
                    color = '#61201d'   
                 />
                </View>
                <View style={stylesPosts.buttonWrapper}>
                    <Button 
                        style={{marginTop : 20}}
                        onPress={this.logOutButtonHandler}
                        title='Log Out'
                        color = '#61201d'
                    />
                </View> 
            </View>}
            <ScrollView>
                {  
                    stateReverse.map(post => 
                    <Post
                        key =  {post.id}
                        title =  {post.title}
                        content =  {post.content}
                        country = {post.country}
                        clicked = {() => this.deletePost(post.id)}
                    />
                )}
                {this.renderExamplePosts()}
            </ScrollView>
            </View>
            );
    }
}

const stylesPosts = StyleSheet.create({
    
    buttons : {
        paddingTop: 15,
    },
    buttonWrapper : {
        marginBottom: 15
    },
    container : {
        marginTop: 15
    },
    text : {
      color: 'white',
      flexDirection: 'row',
      fontSize: 20,
      backgroundColor: 'red',
      padding: 10,
      width:  100,
      height: 100,
      margin: 10
    },
});