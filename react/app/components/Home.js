// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  fetchStuff(){
    return fetch('/api/whatever', {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      this.setState({results: results})
    });
  }
  componentWillMount(){
    this.fetchStuff.bind(this);
  }
  render() {
    return (
      <div>
        <h1 onClick={() => alert("hello")}>Hello World & Hello Puppy</h1>
        <img src="./images/puppy.jpg"/><br></br>
        {
          this.state.results ? this.state.results.map((res, index) => {
            return (
              <p key={index}>res.message</p>
            )
          }) : <div></div>
        }
      </div>
    );
  }
};
