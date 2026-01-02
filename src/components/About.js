import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }
  componentDidMount(){
    //console.log("Parent ComponentDidMount");
  }

  render() {
    //console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is the about page</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Satyam Mishra (class)"} />
      </div>
    );
  }
}

export default About;
