import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  state = {
    date: new Date()
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  tick() {
      this.setState({
        date: new Date()
      });
    }

  render() {
    return (
      <div className="clockContainer">
        <h1>Hello, world!</h1>
        <h2>It is <br/> {this.state.date.toLocaleTimeString()}</h2>
        <div className="buttonContainer">
          <button className="pauseButton" onClick={this.componentWillUnmount}> Pause </button>
          <button className="runButton" onClick={this.componentDidMount}> Run </button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"))
