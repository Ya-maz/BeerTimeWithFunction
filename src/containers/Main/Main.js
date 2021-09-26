import React from 'react';
import classes from './Main.module.css'
import Card from './../../components/Card/Card'


export default class Main extends React.Component {
  render() {
    const fullCard = this.props.beers.map((element, index) => 
    <Card key={element+index} beer={element} />
    )
    return(
      <div className={classes.Main}>
        <div style={{
                            display:'flex',
                            justifyContent: 'flex-start',
                            paddingLeft: '10px',

                          }}>
          <h1 >BEER TIME</h1>
        </div>
        <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      }}>
          {fullCard}
        </div>
      </div>
    )
  }
}

