import React, {Component} from 'react'
import classes from './Input.module.css'

function isInvalid (valid, touched, shouldVlidate) {
    return !valid && shouldVlidate && touched
}

class Input extends Component {
    constructor (props){
        super(props)

        this.inputType = props.type || 'text'
        this.cls = [classes.Input]
        this.htmlFor = `${this.inputType} - ${Math.random()}`
        this.label = this.props.label
    }


    classesHandler = boo => {
        if (boo) {
            this.cls.push(classes.invalid)
        }
        return this.cls.join(' ')
    }
    
    render() {
        return (
            <div className={this.classesHandler()}>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input 
                    type={this.inputType}
                    id = {this.htmlFor}
                    value={this.props.value}
                    onChange={this.props.onChange}></input>
                {
                    isInvalid(this.props) 
                    ?  <span>{this.props.errorMessage || 'Введите верное значение'}</span>
                    : null
                }
               
            </div> 
        )}
    
}

export default Input