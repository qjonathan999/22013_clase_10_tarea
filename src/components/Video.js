import React from "react";

export default class RVideo extends React.Component{
    constructor(props){
        super(props)
        this.video=null
        this.state={
            isActive:false
        }
    }
    handleClick(){
        this.setState({
            isActive:!this.state.isActive
        })
        if(this.state.isActive){
            this.pause()
        }
        else{
            this.play()
        }
    }
    render(){
    return(
        <div>
            <video ref={c=>{
                this.video=c
            }}
            className={this.state.isActive?"active":""}
            src="https://www.youtube.com/watch?v=fHI8X4OXluQ"
            />
            <button onClick={this.handleClick.bind(this)} className={this.state.isActive?"active":""}>
                {this.props.children} 
            </button>
        </div>
    )
    }
}