import React from "react";
class UserClassV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 1,
      name: "Dummy",
    };
    console.log(this.props.name + " constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + " componentDidMount");
    const data = await fetch("https://api.github.com/users/anuraglalwani");
    const json = await data.json();
    this.setState({ name: json.login });
  }
  componentDidUpdate(prevprops, prevState) {
    if (this.state.count != prevState.count) {
    }
    if (this.state.coun2 != prevState.count2) {
    }
    this.timer = setInterval(() => {
      console.log("Interval clg");
    }, 1000);
  }
  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + " render ");
    const { location, contact } = this.props;
    const { count, count2, name } = this.state;
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
