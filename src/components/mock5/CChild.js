import React from 'react'

class Child extends React.Component {
  constructor (props) {
    super(props)
    this.state = { message: 'Class Comp Waiting' }
  }

  setFromOutside (msg) {
    this.setState({ message: msg })
  }

  render () {
    return (
      <h1>{this.state.message}</h1>
    )
  }
}

export default Child
