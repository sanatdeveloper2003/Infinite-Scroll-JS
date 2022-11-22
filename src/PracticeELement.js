import React from 'react'

const inputStyles = {
  width: 235,
  margin: 5
};

class MagicEight extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  ask(){
    if(this.state.userInput){
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event){
    this.setState({
      userInput: event.target.value
    });
  }
  render(){
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return(
      <div>
        <input
        type = 'text'
        value = {this.state.useInput}
        onChange = {this.handleChange}
        style = {inputStyles}
         />
         <br />
         <button onClick = {this.ask}>
          Ask the Magic Eight Ball!
         </button>
         <br />
         <h3>Answer:</h3>
         <p>
          {answer}
         </p>
      </div>
    )
  }
}

import React from "react";
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})

const store = Redux.createStore(rootReducer);