import React, { Component } from 'react';

class StatePractice extends Component {
    constructor(){
        super()
        this.state = {
            message: "",
            imageWidth: '',
        }


        this.focusState = this.focusState.bind(this)
    }
    
    focusState = (e) => {
        this.setState({
            inputText: 'Confirm filling out the form'
        })
    }


    clearText = (e) =>{
        this.setState({
            inputText:''
        })
    }

    widthImg = (e) =>{

    }

    render(){
        return(
            <div>
                <input type="text" onFocus={this.focusState} />
                <h3 onMouseEnter={this.clearText}>{this.state.inputText}</h3>
                <img onLoad={this.widthImg} src="https://picsum.photos/200" alt=""/>
            </div>
        )
    }

}

export default StatePractice;