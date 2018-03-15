import React, { Component } from "react";
import { View, StyleSheet, Linking } from "react-native";
import { Constants, Speech } from "expo";
import { GiftedChat } from "react-native-gifted-chat";
import messagesData from "./data";
import NavBar from "./NavBar";

const styles = StyleSheet.create({
  container: { flex: 1 }
});

const filterBotMessages = message =>
  !message.system && message.user && message.user._id && message.user._id === 2;

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
    this.setState({ messages: messagesData.filter(message => message.system) });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [
        { ...messages[0], sent: true }
      ])
    }));
    setTimeout(
      () => this.botSend(messages),
      1500 + Math.round(Math.random() * 1000)
    );
  }

  botSend(messages = []) {
    fetch("https://app.alumna10.hasura-app.io/backend", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: messages[0].text
      })
    })
      .then(response => response.json())
      .then(response => {
        if (Object.keys(response.entities).length !== 0) {
          resp = response.entities.location[0].value;
          const newMessage = {
            _id: Math.round(Math.random() * 1000000),
            text: resp,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "React Native"
            },
            sent: true,
            received: true
          };
          if (newMessage) {
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, newMessage)
            }));
            Speech.speak(resp, {
              language: "en",
              pitch: 1,
              rate: 0.75
            });
          }
        } else alert("Server did not provide a response!"); // For when wit.ai is unable to extract entity data
      })
      .catch(error => {
        alert("Server did not provide a response!");
        console.error(error);
      });
  }

  parsePatterns(linkStyle) {
    return [
      {
        pattern: /#(\w+)/,
        style: { ...linkStyle, color: "blue" },
        onPress: () => this.onPressHashtag
      }
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
            _id: 1
          }}
          parsePatterns={this.parsePatterns}
        />
      </View>
    );
  }
}
