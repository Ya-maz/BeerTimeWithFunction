import React, {useState, useEffect} from 'react';
import Layout from './hoc/Layout';
import Registration from './containers/Registration/Registration';
import Main from './containers/Main/Main';
import {onToggleHandler, onFilterALCHandler, getFetch } from './utils'

export default function App() {

  const [state, setState] = useState({
    menu: false,
    beers: [],
    filterBeers: false,
  })
    
  useEffect(() => {
    getFetch.call(this, setState)}, [])
    
  return (
    <Layout 
      isOpen={state.menu} 
      onToggle={onToggleHandler.bind(this, setState)}
      onFilterALCHandler={onFilterALCHandler.bind(this, state.beers, setState )}>

      <Main 
        isOpen={state.menu}
        beers={state.beers}
        filterBeers={state.filterBeers}/>
      <Registration 
        isOpen={state.menu}
        onToggle={onToggleHandler.bind(this, setState)}
        />  

    </Layout>
  )
}


