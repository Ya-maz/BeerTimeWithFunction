import React from 'react'
import classes from './Layout.module.css'
import Menu from './../components/Menu/Menu'
import Logo from './../components/Logo/Logo'
import Filter from '../components/Filter/Filter'

export default function Layout(props) {
  return (
    <div className={classes.Layout}>
      <Menu 
        onToggle={props.onToggle}
        isOpen={props.isOpen}
      />
      <Logo />
      <Filter onFilterALCHandler={props.onFilterALCHandler}/>
      <main onClick={props.onToggle}>
        {props.children}
      </main>
    </div>
  )
}

