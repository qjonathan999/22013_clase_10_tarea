import React from "react";

export default class RButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isActive:false
        }
    }

    handleClick(){
        this.setState({
            isActive:!this.state.isActive
        })
    }

    render(){
        return(
            <button onClick={this.handleClick.bind(this)} className={this.state.isActive?"active":""}>
                {this.props.children} 
            </button>
        )
    }
}

