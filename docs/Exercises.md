# Exercises
You will be implementing different animations based on the content presented.

We recommend you have the documentarion of [Animated](https://facebook.github.io/react-native/docs/animated) and [LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation) at hand.

## Exercise one: Animate adding and removing cells to / from a list
Hint: You only need to use Animated to implement this animation.

### Left to right animation
For this animation, you will be implementing a simplified version of [this animation](https://drive.google.com/file/d/1wJ0kIPWYxrCxnlEqxUrQPi80D8LB1m2C/view?usp=sharing) were rows added to the list slide from the left. Hattip to **Thom Rimmer** for creating and sharing this animation.
To implement it, open the `SlidingRowView/index.tsx` and look for thr TODOs sections.

#### Adding rows
a. Create 2 animations that run in parallel.
b. The first animation would slide the row from the left and lasts 50s.
c. The second animation changes the opacity of the row from 0.5 to 1.0 and lasts 75ms.
Extra kudos if you only use one animation and `interpolate` to change the opacity. When using `interpolate` you won't have control on the time though; i.e., the animation to change in opacity and position would last the same. 

#### Deleting rows
Create 1 animation that makes the cell disappear from the left part of the screen that lasts 75ms.

### Top to bottom animation
You need to implement [this animation](https://drive.google.com/open?id=1R_7ccaP6rNx4ZGHZ5pzYlZt0yXDHkH30). Hattip to **Leigh-Ann Bartsch** for creating it and sharing it with us!
To implement it, open the `AnimatableRowView/index.tsx` file and look for the TODOs there. 


If you get stuck just ask. You also have the full solution in the `FINAL-Top-To-Bottom-Animation` branch. 



TODO: Comment the file and the final branch

## Exercise two: Animation on the login screen
