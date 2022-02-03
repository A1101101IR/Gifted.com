import React from "react";
class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { order: [] };
  }

  componentDidMount() {
    fetch("http://localhost:8000/order")
      .then((res) => res.json())
      .then((data) => this.setState({ order: data }));
  }

  render() {
    return <div>{this.state.order.length}</div>;
  }
}
export default Notification;
