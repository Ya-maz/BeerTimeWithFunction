import React from 'react'
import classes from './Input.module.css'
import { classesHandlerForInput, isInvalid } from './../../../utils'

export default function Input(props) {

  const inputType = props.type || 'text'

  const htmlFor = `${inputType} - ${Math.random()}`
  return (
    <div className={classesHandlerForInput.call(this, classes, props)}>
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