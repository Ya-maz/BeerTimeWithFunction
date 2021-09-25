import React from 'react'
import LogoImage from './../../assets/LogoImage.svg'

export default class Logo extends React.Component {
    render() {
        return(
            <img style={{width:'20%', height: '20%'}}
            alt={'logo_image'} src={LogoImage}></img>
        )
    }
}