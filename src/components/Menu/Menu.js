import React from 'react'
import classes from './Menu.module.css'

const Menu = (props) => {
  
  const classesHandler = () => {
    let cls = [
      classes.Menu,
      'fa'
    ]
    if (props.isOpen){
      cls.push('fa-times')
      cls = cls.filter(element => element !== 'fa-bars')
    } else {
      cls.push('fa-bars')
      cls = cls.filter(element => element !== 'fa-times')
    }
    return cls.join(' ')
  }

  return(
    <i 
      className={classesHandler()}
      onClick={props.onToggle}
    ></i>
  )
}
export default Menu

