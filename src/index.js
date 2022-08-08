import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => console.error(error)
    );
  }

  render() {
    return <div>latitude: {this.state.lat}</div>;
  }
}

root.render(<App />);
