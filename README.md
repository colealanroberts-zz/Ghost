# Ghost
A tiny Javascript library for adding beautiful intro animations to your website.

### Example
(https://i.imgur.com/0w3c8Pu.gif)

### Installation
To use Ghost download the .zip file and add `ghost.css` and `ghost.js` to your HTML document.


### Options
| Option        | Description   | Type                                                                                |
| ------------- |:-------------:| -----------------------------------------------------------------------------------:|
| selector      | The #id or .class-name of an HTML element                                                  | String |
| effect        | Either 'reveal' or 'typewriter'                                                            | String |
| text          | A string of text you'd like to animate                                                     | String |
| interval      | Only applicable to the 'typewriter' effect. Represents the speed each character is "typed" | Int    |
| delay         | The delay between adding the appropriate CSS animation                                     | Int    |
| animation     | The animation class used in combination with the effect property (see Animations)          | String |               


### Usage
To start using Ghost you'll need to create a new instance of the Ghost class with a number of required options
```
let ghost = new Ghost({ 
    selector: '#example', 
    effect: 'reveal', 
    text: 'Hello, world.', 
    interval: 100, 
    delay: 400, 
    animation: 'slideDown' 
});

ghost.animate();
```

### Animations
Ghost comes with several animations by default. 

| Value          | Description                              | 
| -------------- |:----------------------------------------:|
| 'flipIn'       | Skews in while moving slightly downwards |
| 'slideDown'    | Slides down on the Y axis                |
| 'slideUp'      | Slides up on the Y axis                  |
| 'fadeIn'       | Fades in with opacity 0 => 1             |

### Contributing
Please create a Pull Request with a semi-detailed explanation of what your proposed change does and how it improves the library. Thanks!
