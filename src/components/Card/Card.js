import React from 'react';
import classes from './Card.module.css'

export default function Card(props) {
  return(
    <div className={classes.Card}>
      <img alt='img' src={props.beer ?
          props.beer.imageUrl
          : null}>
      </img>
      <div className={classes.CardInfo}>
        <div>name: {props.beer.name}</div>
        <div>alcohol by volume: {props.beer.abv}</div>
        <div>international bittering unit: {props.beer.ibu}</div>
        <div>color Units Ebc: {props.beer.ebc}</div>
        {/* <div>{this.props.beer.tagline}</div> */}
      </div>
    </div>
  )
}

