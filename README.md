# React Native Animation Workshop
Welcome to the workshop! You will be implementing some animations using React Native. Before you do that, we need to get you set up.

We **recommend that you use a MAC** to run the workshop or pair up with someone who has a MAC.

Any problems, questions or comments you may have, please Slack us: @juanjo and @alberto.chamorro.

# Setup
## Repo and Dependencies
1. You need [yarn](https://yarnpkg.com). If you want to check if you have it, run `yarn --version`. If you have version 1.15 or above, you're good. If you don't, install yarn using homebrew running `brew install yarn` in your terminal window.
If you don't have homebrew you can get it [here](https://brew.sh/).
**Homebrew is a MAC only tool**, for Windows installations see the linked pages of each of the required components.
2. You need [watchman](https://facebook.github.io/watchman/docs/install.html). If you don't have it, install it with `brew install watchman`. If you want to check whether or not you have it type `watchman -v`. We have tested version 4.9. It may work with other versions as well. If you want to upgrade to be sure, run `brew upgrade watchman`.
3. You need [expo](https://expo.io/). Expo allows you to build, deploy and iterate on your React Native app very quickly. Install expo globally using `yarn global add expo-cli`.
Run `expo --version` on your terminal window to ensure it installed correctly. You should see something like 1.1.0 (or the version you installed).
4. You need to clone this repo.
5. Finally, to install all the dependencies this project requires, go to the folder where you cloned the repo and run `yarn install`.

## IDE
We recommend [Visual Studio Code](https://code.visualstudio.com/). It's also a widely used option at Hudl.

## Running the app
Congratulations, if you've made it here you have your development environment ready :tada:. Now, you need a place to deploy the fancy animations you'll be creating.

There are 2 options: Running it on the device and on the simulator. Ideally, we could all have them running on the devices. That requires your phone and computer to be on the same network. However, since we don't know the quality of network we'll have on the venue, we highly recommend that you also install one of the simulators as a fallback option in case network isn't good enough.

## Option 1: Run it on your iOS or Android simulator.
1. Install iOS or Android simulators, if you don't have them already:
    1. For iOS, [install Xcode](https://itunes.apple.com/es/app/xcode/id497799835?l=en&mt=12).
        a. For Xcode you'll also need the command line tools. Open Xcode and go to `Xcode -> Preferences -> Components`. If you don't see the command line tools there is because you already have them. If you see them there, click to install them.
    2. For Android, [install Android Studio](https://developer.android.com/studio). This is your only viable option if you're on a Windows machine.
2. Open 2 terminal windows.
    1. In the first one, run `yarn storybook`.
    2. In the second terminal window, run `yarn start`. That should open a new tab in your browser where expo would start doing it's magic.
    3. In the tab that was just opened, click on `Run on Android device / emulator` or `Run on iOS simulator` depending on what you installed in the first step.
<img width="288" alt="How expo looks like" src="https://user-images.githubusercontent.com/2914389/54987283-9b511280-4fb4-11e9-8cd9-164e08bb0eb4.png">
That will launch the simulator and prompt you to install the Expo app there. After expo is installed you'll see a Home page screen. Click on `Got It` and you should see [something like this](https://user-images.githubusercontent.com/2914389/54988086-051dec00-4fb6-11e9-8c6e-6bcb58ef06ed.gif)

You're all set :slightly_smiling_face:.

### Option 2: Run it on your Android or iOS device
1. Create an account on [expo.io](https://expo.io/)
2. Install the expo app on your phone
    1. iOS -> https://itunes.apple.com/app/apple-store/id982107779
    2. Android -> https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www
3. Launch the app on your phone and log in with the credentials you created earlier
4. Open 2 terminals.
    1. In the first one, run `yarn storybook`.
    2. In the second one, run `expo login` and log in with the credentials you created in the previous step.
    3. After logging in, run `yarn start`. That should open a new tab in your browser where expo would start doing it's magic.
    4. In the tab that was just opened, click on `Publish or republish` project. You will be presented a brief form there. Change it or leave it as is, it doesn't affect the functionality.
    5. Ensure your phone and computer are on the same network and go back to the Expo app you already installed on your phone. You should see the project you just published both in the `Projects` and `Profile` section. If you do not, pull down to refresh. If you still don't see it make sure you're logged in with the user you created earlier. If none of the previous work, try killing and re-opening the app. Don't take it personally. Expo is a bit stubborn sometimes.
    6. Once you see the project tapping on it would open storybooks on your phone.

# Questions
Once again, any problems, questions or comments you may have, please Slack us: @juanjo and @alberto.chamorro.

# Exercises
For the exercises you will be implementing some animations created by our designers. These animations are either included in a Hudl mobile app or planned to be.

Go to the [Exercises](./docs/Exercises.md) when you're ready.
