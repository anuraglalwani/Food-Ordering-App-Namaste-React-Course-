import React from "react";
import User from "./User";
import UserClassV2 from "./UserClassV2";
import UserContext from "../utils/userContext";
class AboutV2 extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor- Parent");
  }
  componentDidMount() {
    // console.log("componentDidMount-  Parent");
  }

  render() {
    // console.log("render- Parent");
    return (
      <div className="about-page">
        <h1>About Class Component</h1>
        <h2>This is About Page</h2>
        {/* <User name={"Anurag"} /> */}
        <div>
          Context:
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <>{loggedInUser}</>;
            }}
          </UserContext.Consumer>
        </div>
        <UserClassV2
          name={"First "}
          location="Bangalore"
          contact="anurag@gmail.com"
        />
        {/* <UserClassV2
          name={"Second"}
          location="Bangalore"
          contact="anurag@gmail.com"
        />
        <UserClassV2
          name={"Third"}
          location="Bangalore"
          contact="anurag@gmail.com"
        /> */}
      </div>
    );
  }
}

export default AboutV2;
