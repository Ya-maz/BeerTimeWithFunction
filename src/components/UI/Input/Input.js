import React from 'react'
import classes from './Input.module.css'
import { isInvalid } from './../../../utils'

const Input = (props) => {

  const inputType = props.type || 'text'
  const htmlFor = `${inputType} - ${Math.random()}`

  const classesHandler = () => {
    const {valid, shouldValidate, touched} = props
    let cls = [classes.Input]
    if (isInvalid(valid, shouldValidate, touched)) {
      cls.push(classes.invalid)
    } else cls = cls.filter(el => el !== classes.invalid)
    return cls.join(' ')
  }

  return (
    <div className={classesHandler()}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input 
        type={inputType}
        id = {htmlFor}
        value={props.value}
        onChange={props.onChange}
        />
      {
        isInvalid(props.valid, props.shouldValidate, props.touched)
        ?  <span>{props.errorMessage || 'Введите верное значение'}</span>
        : null
      }
    </div> 
  )
}
export default Input