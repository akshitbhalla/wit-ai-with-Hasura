import React, { Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import messagesData from './data';
import NavBar from './NavBar';

const styles = StyleSheet.create({
  container: { flex: 1 },
});

const filterBotMessages = (message) => !message.system && message.user && message.user._id && message.user._id === 2;

export default class ChatScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    this.onSend = this.onSend.bind(this);
    this.parsePatterns = this.parsePatterns.bind(this);
  }

  componentWillMount() {
    // init with only system messages
    this.setState({ messages: messagesData.filter((message) => message.system) });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [{ ...messages[0], sent: true }])
    }));
    setTimeout(() => this.botSend(messages), 1500 + Math.round(Math.random() * 1000));
  }

  botSend(messages = []) {
    fetch('https://app.alumna10.hasura-app.io/backend', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: messages
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        newMessage: responseJson.resp,
      }, 
      function() {
        if (newMessage) {
          this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, newMessage),
          }));
        }
      });
      
    })
    .catch((error) => {
      console.error(error);
    });
  }

  parsePatterns(linkStyle) {
    return [
      {
        pattern: /#(\w+)/,
        style: { ...linkStyle, color: 'blue' },
        onPress: () => this.onPressHashtag,
      },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
          parsePatterns={this.parsePatterns}
        />
      </View>
    );
  }
}