import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
    // You need to bind functions that uses setState
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change</button>
      </>
    )
  }
}

export default App
