import React from "react";
class UserClassV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("constructor UserClassV2");
  }
  componentDidMount() {
    console.log("componentDidMount UserClassV2");
  }
  render() {
    console.log("render  UserClassV2");
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div style={{ marginLeft: "25px" }}>
        <h2>{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>{count2}</h2>
        <h1>Name: {name} </h1>
        <h3>Location: {location} </h3>
        <h4>Contact :{contact}</h4>
      </div>
    );
  }
}
export default UserClassV2;
