import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <p>I am {this.props.name}</p>
                <p>User object => Name: {this.props.user.name}</p>
                <div>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}