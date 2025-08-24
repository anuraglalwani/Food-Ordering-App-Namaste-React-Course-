import React from "react";
import User from "./User";
import UserClassV2 from "./UserClassV2";
class AboutV2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor- AboutV2");
  }
  componentDidMount() {
    console.log("componentDidMount-  AboutV2");
  }

  render() {
    console.log("render- AboutV2");
    return (
      <div className="about-page">
        <h1>About Class Component</h1>
        <h2>This is About Page</h2>
        {/* <User name={"Anurag"} /> */}
        <UserClassV2
          name={"Anurag class"}
          location="Bangalore"
          contact="anurag@gmail.com"
        />
      </div>
    );
  }
}

export default AboutV2;
