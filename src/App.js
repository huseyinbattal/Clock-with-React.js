import React from "react";
import "./App.css"
import GrowExample from "./Snipper";
import 'bootstrap/dist/css/bootstrap.min.css';

function FormattedDate(props) {
  return <h2>{props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <FormattedDate date={this.state.date} />
        <h3><GrowExample/></h3>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}