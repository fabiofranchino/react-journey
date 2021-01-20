import React from 'react'

class Mock extends React.Component {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
    this.state = { counter: 0 }

    this.handleClickMe = this.handleClickMe.bind(this)
  }

  componentDidMount () {
    console.log('componentDidMount')
    console.log(this.ref)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  handleClickMe () {
    this.setState((state, props) => ({
      counter: state.counter + 1
    }))
  }

  render () {
    return (
      <div className='frame'>
        <h1 ref={this.ref}>Class Component {this.state.counter}</h1>
        <button onClick={this.handleClickMe}>Click Me</button>
      </div>
    )
  }
}

export default Mock
