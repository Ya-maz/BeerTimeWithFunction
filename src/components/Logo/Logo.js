import React from 'react'
import classes from './Logo.module.css'
import LogoImage from './../../assets/LogoImage.svg'

export default function Logo() {
  return(
    <img className={classes.Logo}
      alt='logo_image' src={LogoImage}></img>
  )
}