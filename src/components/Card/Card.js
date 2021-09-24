import React from 'react';
import classes from './Card.module.css'
// import {TubeForProps} from './../../App'


export default class Card extends React.Component {
  render() {
    console.log(this.props.beer.imageUrl)
    return(
      <div className={classes.Card}>
        <img alt={'img'} src={this.props.beer ?
           this.props.beer.imageUrl
           : null}>
        </img>
        <bold>{this.props.beer ?
           this.props.beer.name
           : null}</bold>
      </div>
    )
  }
}