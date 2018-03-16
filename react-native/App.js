import React from "react";
import { Container } from "native-base";
import AuthScreen from "./src/components/AuthScreen";
import ChatScreen from "./src/components/ChatScreen";

export default class App extends React.Component {
  render() {
    console.log("App started");
    return (
      <Container>
        <AuthScreen logoutCallback={this.backToLoginScreen} />
      </Container>
    );
  }
}
