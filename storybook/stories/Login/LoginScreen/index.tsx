import React from "react";
import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";
import LoginTextInput from "../LoginTextInput";
import LoginButton from "../LoginButton";
import style from "./style";

interface State {
  errorMessage?: string;
}

export default class App extends React.Component<{}, State> {
  state = {
    errorMessage: undefined
  };

  componentDidMount() {
    this.animate();
  }

  animate() {
    // TODO:
    // 1. Move the logo from the center of the screen to its final position
    // 2. After the logo stops, make the login from to appear slowly on screen
    // 3. Optimize the animation by running it on the UI thread
  }

  toggleErrorMessage = () => {
    // TODO:
    // 4. Animate the transition of the error message
    this.setState(prev => {
      if (prev.errorMessage) {
        return { errorMessage: undefined };
      }

      return { errorMessage: "Some random error here!" };
    });
  };

  render() {
    const { errorMessage } = this.state;

    // TODO: Note that the views below are not animatable yet.
    return (
      <ImageBackground
        style={style.backgroundImage}
        source={require("./assets/login-bg-iphone-4in.png")}
      >
        <SafeAreaView style={[style.container]}>
          <StatusBar hidden />
          <View style={style.logoContainer}>
            <Image
              source={require("./assets/logo-hudl-login.png")}
              style={style.logo}
            />
          </View>
          <View style={style.loginFormContainer}>
            <LoginTextInput style={style.emailField} label="Email" />
            <LoginTextInput style={style.passwordField} label="Password" />
            {errorMessage && (
              <View style={style.errorContainer}>
                <Text style={style.errorMessage}>{errorMessage}</Text>
              </View>
            )}
            <LoginButton
              style={style.loginButton}
              onPress={this.toggleErrorMessage}
            >
              {"Login"}
            </LoginButton>
            <TouchableOpacity>
              <Text style={style.loginHelpLink}>Need Help Logging In?</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
