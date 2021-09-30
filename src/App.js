import React, {useReducer, useEffect} from 'react';
import Layout from './hoc/Layout';
import Registration from './containers/Registration/Registration';
import Main from './containers/Main/Main';
import { getFetch } from './services'

const App = () => {

  const MENU_TOGGLE = 'menu_toggle'
  const FILTER_ALC = 'filter_alc'
  const GET_FETCH = 'get_fetch'

  const reducer = (state, action) => {
    switch (action.type) {
      case MENU_TOGGLE: return {...state, menu: !state.menu}
      case FILTER_ALC: return {...state, filterBeers: action.newfilterBeers}
      case GET_FETCH: return {...state, beers: action.items}
      default: return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    menu: false,
    beers: [],
    filterBeers: false,
  })
  
  
  const onToggleHandler = () => dispatch({type: MENU_TOGGLE})
  

  const onFilterALCHandler = ( event ) => {
    const value = event.target.value
    const newfilterBeers = state.beers.filter(beer => value ? 
      Math.trunc(beer.abv) === Number(value) :
      state.beers);
    dispatch({type: FILTER_ALC, newfilterBeers})
  };

  const saveResultFromServer = (items) => dispatch({type:GET_FETCH, items})
  useEffect(() => {
    getFetch(saveResultFromServer)
    }, [])
  
  return (
    <Layout 
      isOpen={state.menu} 
      onToggle={onToggleHandler}
      onFilterALCHandler={onFilterALCHandler}>

      <Main 
        isOpen={state.menu}
        beers={state.beers}
        filterBeers={state.filterBeers}/>
      <Registration 
        isOpen={state.menu}
        onToggle={onToggleHandler}
        />  

    </Layout>
  )
}
export default App

