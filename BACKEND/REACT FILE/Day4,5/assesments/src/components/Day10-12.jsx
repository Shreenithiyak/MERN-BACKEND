// <!-- 1. What is React
// React is an js library used to build a user interface especially for single-page-applications(SPA).
// Developed by facebook now its called meta. 
// React mainly using for dynamic webpage.
// It is only focused on view layer of MVC architecture,it means it responsible only for how the UI looks & updates.

// 2. what is js and what is jsx?
// js = Is an pure logic code with separate file. 
// jsx = it include with XML file which means it also have html elements and customizable tags.


// 3. what is main.jsx why we use?
// main.jsx = This the entry file of the vite react file
// flow like: commponents file--app.jsx--app file--main.jsx.


// 4. what is babel compiler?
// It is an Translator to the mordern js file into older js 
// flow like: jsx--bable compiler--javascript--browser understanding.


// 5. what is virtual dom? and real dom?
// virtual dom:
//         Is js object represented of the real dom
//         copy of the real dom.
// real dom:
//         when browser loads the html it parses html & create dom tree any changes triggers reflow &repaint


// 6. what is export default and named exports
//  export default means : to export only one main thing from a file. we can rename while importing. no need of {}.
//  Ex:export default function sayHi() 

//  named export means: can export many file components without using the name [default] it can't be rename. must use{}. 
//  Ex:export const age = 22; 

// 7. how you import the export default ?
//   After export the one file for example:
//                        Ex:export default function sayHi() 
 
//    using main.jsx can import that files like:
//                     Ex:import greet from "./greet";
//    and also we can rename it -----greet into myfunc.

// 

// 2. what is compaoants?
  //piece of UI code which can be reused in multiple places.
  // it is used purpose of deverlopers understanding the code.

// 3. what is the type for compoanats?
  // functional componants.
  // class based components.

// 4. what is fragment tags in components?
  //  It is non behavioural tag which is used to group the elements.
  //To write an html code inside a react component we use fragment tag. 


// What is Class Component
  // class component is a js class that helps to create UI react. 

// How to create Class Component
  // for example: class App extends component{
  // constructor(){
  // super()}
  // render(){
  // return(jsx)}
  // }----this is the syntax for creating the class component.

// What is State
  // state is used to store dynamic values inside a component which means (jsx) 
 //for example:we use it like {this.state.count} this state by syntax we use below the constructor 
 // and also we write without it.

// setState() process
   //this is used to update the current value  of the commponents data to the state
   // setState() syntax
   // this.setState({count:count+1})

// Lifecycle methods (Mount / Update / Unmount)
  // mount: Component created and shown on screen
  // flow like:class component--constructor--render--componentDidMount

  //update:Component changes when data/state changes
  //continued as: compoundupdate---render---componentDidUpdate

  //unmount:Component removed from screen
  //finall: componentunmount--componentWillUnmount 

// Real example with button
import { Component } from "react"
class App extends Component {

  constructor(){
    super();

    this.state = {
      count: 0
    };
  }

  increase = () =>{
    this.setState({
      count: this.state.count + 1
    });
  }

  render(){
    return(
      <div>

        <h1>{this.state.count}</h1>

        <button onClick={this.increase}>
          Increase
        </button>

      </div>
    );
  }

}

// What happens without button / without setState
  //without button and setstate ---the webpage will stay on the initial state.which means count 0.
  

// What is constructor() in React Class Component?
  // constructor() is a special method which runs when the component is created.
  //Store default UI state inside the constructor.


// Why We Use constructor()?
  //constructor() runs when the component is created (mounting phase).
  //It is used to set the initial state


