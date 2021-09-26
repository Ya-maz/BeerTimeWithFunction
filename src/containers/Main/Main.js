import React from 'react';
import classes from './Main.module.css'
import Card from './../../components/Card/Card'


export default class Main extends React.Component {
  constructor(props){
    super(props)

    this.cls = [classes.Main]
  }

  classesHandler = () => {
    if (this.props.isOpen) {
      this.cls.push(classes.open)
      return this.cls.join(' ')
    }
    this.cls = this.cls.filter(el => el !== classes.open)
    return this.cls.join(' ')
  }
  
  render() {

    let fullCard
    if (this.props.filterBeers){
      fullCard = this.props.filterBeers.map((element, index) => 
      <Card key={element+index} beer={element} />
      )
    } else {
      fullCard = this.props.beers.map((element, index) => 
      <Card key={element+index} beer={element} />
      )
    }
    return(
      <div className={this.classesHandler()}>
        <div style={{
                            display:'flex',
                            justifyContent: 'flex-start',
                            paddingLeft: '10px',

                          }}>
          <h1 >CHOOSE YOUR DESTINY</h1>
        </div>
        <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      flexWrap: 'wrap',
                      }}>
          {fullCard}
        </div>
      </div>
    )
  }
}

