import React from 'react';
import classes from './Main.module.css'
import Card from './../../components/Card/Card'

const Main = (props) => {
  const classesHandler = () => {
    let cls = [classes.Main]
    if (props.isOpen) {
      cls.push(classes.open)
      return cls.join(' ')
    }
    cls = cls.filter(el => el !== classes.open)
    return cls.join(' ')
  }

  
  const showFullCard = () => {
    if (props.filterBeers){
      return props.filterBeers.map((element, index) => 
      <Card key={element+index} beer={element} />)
    } else {
      return props.beers.map((element, index) => 
      <Card key={element+index} beer={element} />)
    }
  }

  return(
    <div className={classesHandler()}>
      <div className={classes.MainTitle}>
        <h1 >CHOOSE YOUR DESTINY</h1>
      </div>
      <div className={classes.MainItems}>
        {showFullCard.call(this, Card, props.filterBeers, props.beers)}
      </div>
    </div>
  )
}
export default Main