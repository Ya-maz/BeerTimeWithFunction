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
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          textAlign: 'start',
          height: '30px',
          lineHeight: '20px',
          fontSize: '12px',

        }}>
          <div>name: {this.props.beer.name}</div>
          <div>alcohol by volume: {this.props.beer.abv}</div>
          <div>international bittering unit: {this.props.beer.ibu}</div>
          <div>color Units Ebc: {this.props.beer.ebc}</div>
          <div>{this.props.beer.tagline}</div>
        </div>
      </div>
    )
  }
}