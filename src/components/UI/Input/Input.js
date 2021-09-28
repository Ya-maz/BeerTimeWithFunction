import React, {Component} from 'react'
import classes from './Input.module.css'
import { classesHandlerForInput, isInvalid } from './../../../utils'

class Input extends Component {
    constructor (props){
        super(props)

        this.inputType = props.type || 'text'
        this.cls = [classes.Input]
        this.htmlFor = `${this.inputType} - ${Math.random()}`
        this.label = this.props.label
    }

    render() {
        return (
            <div className={classesHandlerForInput.call(this, classes)}>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input 
                    type={this.inputType}
                    id = {this.htmlFor}
                    value={this.props.value}
                    onChange={this.props.onChange} />
                {
                   isInvalid(this.props.valid, this.props.shouldValidate, this.props.touched)
                    ?  <span>{this.props.errorMessage || 'Введите верное значение'}</span>
                    : null
                    
                }
               
            </div> 
        )}
    
}

export default Input