// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  componentDidMount(){
    SC.initialize({
      client_id: 'ebe2d1362a92fc057ac484fcfb265049'
    });
    SC.get('/tracks/336768726').then(function(response) {
        console.log(response);
    });
  }
  render() {
  	/*
		Html within this render method every time
  	*/
    return (
      <div>
        <h1 onClick={() => alert("hello")}>Hello World & Hello Puppy</h1>
        <img src="./images/puppy.jpg"/><br></br>
      </div>
    );
  }
};
