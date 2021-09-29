import React from 'react';
import classes from './Main.module.css'
import Card from './../../components/Card/Card'
import { classesHandlerForMain, showFullCard } from '../../utils';


export default function Main(props) {
    return(
      <div className={classesHandlerForMain.call(this, classes, props.isOpen)}>
        <div className={classes.MainTitle}>
          <h1 >CHOOSE YOUR DESTINY</h1>
        </div>
        <div className={classes.MainItems}>
          {showFullCard.call(this, Card, props.filterBeers, props.beers)}
        </div>
      </div>
    )
}