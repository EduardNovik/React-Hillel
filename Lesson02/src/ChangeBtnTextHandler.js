import React, {Component} from "react";


export default class ChangeBtnTextHandler extends Component{
    constructor(){
        super()
        this.state = {text:'Show'}
    }
    changeText = () => {
        this.state.text === 'Show' 
        ? this.setState({text:'Hide'})
        : this.setState({text: 'Show'})
    }
    render(){
        return(
            <button onClick={this.changeText} style={{display:'block', marginTop:'50px'}}>{this.state.text}</button>
        )
    }
}