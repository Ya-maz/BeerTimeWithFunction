import React from 'react'
import classes from './Menu.module.css'
import {classesHandlerForMenu} from './../../utils'

export default function Menu(props) {
  return(
    <i 
      className={classesHandlerForMenu.call(this, classes, props.isOpen)}
      onClick={props.onToggle}
    ></i>
  )
}

