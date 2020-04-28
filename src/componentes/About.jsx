import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div>
        Página About
        {/* <a href="/sobre">Home</a> */}
        <Link to="/">Home</Link>
    </div>
    );
  }
}