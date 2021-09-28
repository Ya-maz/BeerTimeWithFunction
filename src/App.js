import React from 'react';
import Layout from './hoc/Layout';
import Registration from './containers/Registration/Registration';
import Main from './containers/Main/Main';
import {onToggleHandler, onFilterALCHandler, getFetch } from './utils'

class App extends React.Component {

  state = {
    menu: false,
    beers: [],
    filterBeers: false,
  }

  componentDidMount() {
    getFetch.call(this)
  }

  render () {
    return (
      <Layout 
              isOpen={this.state.menu} 
              onToggle={onToggleHandler.bind(this)}
              onFilterALCHandler={onFilterALCHandler.bind(this)}>

        <Main 
          isOpen={this.state.menu}
          beers={this.state.beers}
          filterBeers={this.state.filterBeers}/>
        <Registration 
          isOpen={this.state.menu}
          onToggle={onToggleHandler.bind(this)}
          />  

      </Layout>
    );
  }
}

export default App;
