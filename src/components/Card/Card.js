import React from 'react';
import classes from './Card.module.css'
// import {TubeForProps} from './../../App'


export default class Card extends React.Component {
  render() {
    return(
      <div className={classes.Card}>
        <img alt='img' src={this.props.beer ?
           this.props.beer.imageUrl
           : null}>
        </img>
        <div className={classes.CardInfo}>
          <div>name: {this.props.beer.name}</div>
          <div>alcohol by volume: {this.props.beer.abv}</div>
          <div>international bittering unit: {this.props.beer.ibu}</div>
          <div>color Units Ebc: {this.props.beer.ebc}</div>
          {/* <div>{this.props.beer.tagline}</div> */}
        </div>
      </div>
    )
  }
}

