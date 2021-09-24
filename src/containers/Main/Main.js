import React from 'react';
import classes from './Main.module.css'
import Card from './../../components/Card/Card'

export default class Main extends React.Component {
  render() {
    return(
      <div className={classes.Main}>
        <div >
          <h1 className={{
                            display:'flex',
                            justifyContent: 'flex-start',
                            color:'red'
                          }}>BEER TIME</h1>
          </div>
        
        <Card />
        <Card />
      </div>
    )
  }
}

