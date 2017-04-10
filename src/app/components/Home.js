import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(()=> {
            this.setState({
                status: 1
            })
        }, 3000)

        console.log("constructor");
    }

    componentWillMount(){
        console.log("Component Will mount");
    }

    componentDidMount(){
        console.log("Component did mount");
    }    

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props");
    }    

    shouldComponentUpdate(nextProps, nextState){
        console.log("Component should update", nextProps, nextState);
        // if(this.state.status === 1){
        //     return false;
        // }
        return true;
    }        

    componentWillUpdate(nextProps, nextState){
        console.log("Component will update", nextProps, nextState);
    }  

    componentDidUpdate(prevProps, prevState){
        console.log("Component did update", prevProps, prevState);
    }    

    componentWillUnmount(){
        console.log("Component will unmount");
    }       

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeName(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }

    render(){
        return(
            <div>
                <p>Name: {this.props.name}, age is {this.state.age}</p>
                <p>Name: {this.props.name}, age is {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} 
                                    onChange={(event) => this.onHandleChange(event)} />
                <button onClick={this.onChangeName.bind(this)} className="btn btn-primary">Change header link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
}