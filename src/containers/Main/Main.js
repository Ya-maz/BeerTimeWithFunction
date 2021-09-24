import React from 'react';
import classes from './Main.module.css'
import Card from './../../components/Card/Card'


export default class Main extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const fullCard = this.props.beers.map(element => 
    <Card beer={element} />
    )
    return(
      <div className={classes.Main}>
        <div style={{
                            display:'flex',
                            justifyContent: 'flex-start',
                            color:'red',
                            border: '1px solid blue',
                            paddingLeft: '10px',

                          }}>
          <h1 >BEER TIME</h1>
        </div>
        <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      color: 'red',
                      }}>
          {fullCard}
        </div>
      </div>
    )
  }
}

