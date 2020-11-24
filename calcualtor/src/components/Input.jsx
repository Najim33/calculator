import React, { Component } from 'react'
import './Input.css'



export class Input extends Component {
    render(props) {
        return (
            <div className={`input `}>
               <div className={` ${this.props.inp?"inp":null }  `}>
                    <h4>{this.props.input}</h4> 
                </div> 
            </div>
        )
    }
}

export default Input
