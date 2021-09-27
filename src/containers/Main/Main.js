import React from 'react';
import classes from './Main.module.css'
import Card from './../../components/Card/Card'
import { classesHandlerForMain, showFullCard } from '../../utils';


export default class Main extends React.Component {
  constructor(props){
    super(props)

    this.cls = [classes.Main]
  }
  
  render() {
    return(
      <div className={classesHandlerForMain.call(this, classes)}>
        <div className={classes.MainTitle}>
          <h1 >CHOOSE YOUR DESTINY</h1>
        </div>
        <div className={classes.MainItems}>
          {showFullCard.call(this, Card)}
        </div>
      </div>
    )
  }
}