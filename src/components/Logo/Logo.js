import React from 'react'
import classes from './Logo.module.css'
import LogoImage from './../../assets/LogoImage.svg'

const Logo = () => {
  return(
    <img className={classes.Logo}
      alt='logo_image' src={LogoImage}></img>
  )
}
export default Logo