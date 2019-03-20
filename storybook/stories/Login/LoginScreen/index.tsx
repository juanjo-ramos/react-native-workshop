import React from "react";
import {
  View,
  ImageBackground,
  SafeAreaView,
  Animated,
  Text,
  TouchableOpacity,
  Image,
  LayoutAnimation,
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

  logoOffset = new Animated.Value(0);
  loginFormOpacity = new Animated.Value(0);

  componentDidMount() {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(this.logoOffset, {
        toValue: -220,
        duration: 600,
        useNativeDriver: true
      }),
      Animated.timing(this.loginFormOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true
      })
    ]).start();
  }

  toggleErrorMessage = () => {
    LayoutAnimation.easeInEaseOut();

    this.setState(prev => {
      if (prev.errorMessage) {
        return { errorMessage: undefined };
      }

      return { errorMessage: "Some random error here!" };
    });
  };

  render() {
    const { errorMessage } = this.state;

    return (
      <ImageBackground
        style={style.backgroundImage}
        source={require("./assets/login-bg-iphone-4in.png")}
      >
        <SafeAreaView style={[style.container]}>
          <StatusBar hidden />
          <Animated.View
            style={[
              style.logoContainer,
              { transform: [{ translateY: this.logoOffset }] }
            ]}
          >
            <Image
              source={require("./assets/logo-hudl-login.png")}
              style={style.logo}
            />
          </Animated.View>
          <Animated.View
            style={[
              style.loginFormContainer,
              { opacity: this.loginFormOpacity }
            ]}
          >
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
          </Animated.View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
