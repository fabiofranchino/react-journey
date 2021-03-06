import React from 'react'

class Mock extends React.Component {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
    this.state = { counter: 0 }

    this.handleClickMe = this.handleClickMe.bind(this)
  }

  componentDidMount () {
    console.log('mount')
    console.log(this.ref)
  }

  componentWillUnmount () {
    console.log('unmount')
  }

  componentDidUpdate () {
    console.log('update')
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
        <p>With its internal state and component cycle events</p>
        <button onClick={this.handleClickMe}>Click Me</button>
      </div>
    )
  }
}

export default Mock
