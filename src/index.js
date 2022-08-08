import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, lon: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      (error) => console.error(error)
    );
  }

  render() {
    return (
      <div>
        latitude: {this.state.lat} longitude: {this.state.lon}
      </div>
    );
  }
}

root.render(<App />);
