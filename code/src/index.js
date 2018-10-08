import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  state = {
    date: new Date()
  }

  componentDidMount() {
    this.runClock()
  }

  componentWillUnmount() {
    this.pauseClock()
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  pauseClock = () => {
    clearInterval(this.timerID)
  }

  runClock = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  render() {
    return (
      <div className="clockContainer">
        <h1>Hello, world!</h1>
        <h2>The time is <br /> {this.state.date.toLocaleTimeString()} </h2>
        <div className="buttonContainer">
          <button className="pauseButton" onClick={this.pauseClock}> Pause </button>
          <button className="runButton" onClick={this.runClock}> Run </button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"))
