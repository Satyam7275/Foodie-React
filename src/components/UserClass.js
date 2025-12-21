import React from "react";

class UserClass extends React.Component{
     constructor(props){
     super(props);
     this.state={
          userInfo:{
               name:"Dummy",
               loaction:"Default",
          },
     };
     //console.log( this.props.name+"child  constructor");
     }
     async componentDidMount(){
       //   console.log(this.props.name+" child componetDidmount");   
       //Api call
       const data=await fetch("https://api.github.com/users/Satyam7275");
       const json=await data.json();
       this.setState({
          userInfo:json,
       })
       console.log(json);
}    
     componentDidUpdate(){
          console.log("Component Did Update")
     }
     componentWillUnmount(){
          console.log("Component Will UnMount")
     }
     render(){
          const {name,location}=this.state.userInfo;
        
         // console.log(this.props.name+" child render"); 

         return (
         <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:@satyam7275</h4>
    </div>
    );

     }

};
export default UserClass;