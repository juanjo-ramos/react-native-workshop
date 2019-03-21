import { StyleSheet } from "react-native";

export default StyleSheet.create({
  loginHelpLink: {
    textAlign: "center",
    marginTop: 20,
    color: "white",
    fontWeight: "bold"
  },
  loginFormContainer: {
    width: "100%"
  },
  backgroundImage: {
    flex: 1,
    paddingHorizontal: 20
  },
  emailField: {
    width: "100%"
  },
  passwordField: {
    width: "100%",
    marginTop: 20
  },
  loginButton: {
    marginTop: 30,
    width: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  logo: {
    width: 64,
    height: 64,
    transform: [{translateY: -220}]
  },
  errorContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 5
  },
  errorMessage: {
    color: 'white',
  }
});
