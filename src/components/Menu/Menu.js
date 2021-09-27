import React from 'react'
import classes from './Menu.module.css'
import {classesHandlerForMenu} from './../../utils'

class Menu extends React.Component {
  constructor(props){
    super(props)    

    this.cls = [
      classes.Menu,
      'fa'
    ]
  }

  render() {
    return(
      <i 
        className={classesHandlerForMenu.call(this)}
        onClick={this.props.onToggle}
      ></i>
        )
    }
}

export default Menu