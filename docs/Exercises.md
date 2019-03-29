# Exercises
You will be implementing different animations based on the content presented.

We recommend you have the documentation of [Animated](https://facebook.github.io/react-native/docs/animated) and [LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation) at hand.

## Exercise one: Animate adding and removing cells to / from a list
Hint: You only need to use Animated to implement this animation.

### Left to right animation
For this animation, you will be implementing a simplified version of [this animation](https://drive.google.com/file/d/1wJ0kIPWYxrCxnlEqxUrQPi80D8LB1m2C/view?usp=sharing) were rows added to the list slide from the left. Hattip to **Thom Rimmer** for creating and sharing this animation.
To implement it, open the `SlidingRowView/index.tsx` and look for thr TODOs sections. You will need to create 2 animations: One when rows are added and another one when they're deleted.

### Top to bottom animation
You need to implement [this animation](https://drive.google.com/open?id=1R_7ccaP6rNx4ZGHZ5pzYlZt0yXDHkH30). Hattip to **Leigh-Ann Bartsch** for creating it and sharing it with us!
To implement it, open the `AnimatableRowView/index.tsx` file and look for the TODOs there. 

If you get stuck just ask. You also have the full solution in the `FINAL-Exercise-One` branch. 

## Exercise two: Animation on the login screen
### Introduction
In this exercise, we are re-creating [Hudl's Login screen (iOS version)](https://drive.google.com/file/d/19tI6PLJ_ZQCnzGYfdmcsljKlbua3MzW9/view?usp=sharing):

<div style="text-align: center"><img src="https://user-images.githubusercontent.com/6965651/55230257-8af0a000-521f-11e9-8090-2c1b17ef76ad.gif" /></div>

As you can see, the logo stays in the middle of the screen while the app loads. Then, it moves to the top and the login form fades in. Even more, when [there is an error](![Hudl-Login](https://user-images.githubusercontent.com/6965651/55230257-8af0a000-521f-11e9-8090-2c1b17ef76ad.gif)):

<div style="text-align: center"><img src="https://user-images.githubusercontent.com/6965651/55231122-fdfb1600-5221-11e9-9e30-e723c792d66f.gif" /></div>

### Instructions

When you open the exercise, you will see the following screen:
<div style="text-align: center"><img src="https://user-images.githubusercontent.com/6965651/55233097-c2634a80-5227-11e9-8998-6ba233ed2466.png"></div>

If you tap on the `Login`, an error message appears:
<div style="text-align: center"><img src="https://user-images.githubusercontent.com/6965651/55233598-5eda1c80-5229-11e9-9b84-cbc9c9a1e5e3.png" /></div>

Tapping on `Login` again, makes the error message to disappear.

We will be editing the following files:
 * `storybook/Login/LoginScreen/index.tsx`: This has the code for the component.
 * `storybook/Login/LoginScreen/style.ts`: This file has the styling rules for the `LoginScreen` component.

We suggest the following order to implement the exercise:
1. Hide the login form
2. Move the logo to the center of the screen.
3. Add an animation to move the logo from the center to its final position
4. Add an animation to show the login form
5. Add an animation when toggling the error (by pressing the Login button)
   1. Hint: we saw there is an easy way to animate layout changes when adding/removing elements...

