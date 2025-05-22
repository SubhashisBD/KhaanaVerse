import React from "react";

class UserClass extends React.Component {
    // When the Class Load the instance of the class is created and constructor is called and then the render is called after the render 
    // method finish  componentDidMount() is called. It basically to make an API call & fill the component shows it to our page.
    constructor(props) {
        console.log("Constructor");
        super(props);

        // Local variable
        this.state = {
            count: 0,
            count2:0
        };
    }

    componentDidMount(){
        console.log("componentDidMount logged In");
    }

    render() {
        console.log("render");
        const { name} = this.props;
        const { count } = this.state;
        return (
            <div>
                <h1>Name:{name}</h1>
            <h1>Count:{count}</h1>
            <button onClick={() => {
                // NEVER UPDATE STATE VARIABLE DIRECTLY
                this.setState({
                    count:this.state.count+1,
                });
                }}>Click</button>
                </div>
        )
    }
};

export default UserClass;

/*
-Parent Constructor
-Parent render

  -First Constructor
  -First Render

  -Second Constructor
  -Second Render

  <DOM UPDATED IN SINGLE BATCH>

  -First ComponentDidMount
  -Second ComponentDidMount

-Parent ComponentDidMount

<DOM UPDATED IN SINGLE BATCH>

React LifeCycle--Read
   -React first Do the Render Phase and then Commit Phase.

Dom is an expensive operation so ComponentDidMount is batches together for optimization.
 
**/