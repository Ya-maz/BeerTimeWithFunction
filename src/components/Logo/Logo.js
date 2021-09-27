import React from 'react'
import classes from './Logo.module.css'
import LogoImage from './../../assets/LogoImage.svg'

export default class Logo extends React.Component {
    render() {
        return(
            <img className={classes.Logo}
                alt='logo_image' src={LogoImage}></img>
        )
    }
}