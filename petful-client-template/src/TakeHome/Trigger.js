import React, { Component } from 'react'

export default class Trigger extends Component {

  componentDidMount(){
    this.props.func();
  }
    render() {
    return (
      <div>
      </div>
    )
  }
}