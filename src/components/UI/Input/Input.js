import React, {Component} from 'react'
import classes from './Input.module.css'

function isInvalid (valid, touched, shouldValidate) {
    return !valid && shouldValidate && touched
}

class Input extends Component {
    constructor (props){
        super(props)

        this.inputType = props.type || 'text'
        this.cls = [classes.Input]
        this.htmlFor = `${this.inputType} - ${Math.random()}`
        this.label = this.props.label
    }


    classesHandler = () => {
        console.log('работает функция',isInvalid(this.props.valid, this.props.shouldValidate, this.props.touched))
        if (isInvalid(this.props.valid, this.props.shouldValidate, this.props.touched)) {
            console.log('hi')
            this.cls.push(classes.invalid)
        } else this.cls = this.cls.filter(el => el !== classes.invalid)
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