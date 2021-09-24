import React from 'react';
import classes from './Card.module.css'
// import {TubeForProps} from './../../App'


export default class Card extends React.Component {
  render() {
    return(
      <div className={classes.Card}>
        <img alt={'img'}></img>
        <p>Пивасик</p>
        <div>
          <div>
            {/* <TubeForProps.Consumer>
              {beers => <img alt={'img'} src={beers[0].image_url}></img>}
            </TubeForProps.Consumer> */}
          </div>
        </div>
      </div>
    )
  }
}