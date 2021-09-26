import React from 'react';
import Layout from './hoc/Layout';
import Registration from './containers/Registration/Registration';
import Main from './containers/Main/Main';

class App extends React.Component {

  state = {
      menu: false,
      beers: [],
      filterBeers: false,
    }

  onToggleHandler = () => {
      this.setState({
          menu: !this.state.menu
      })
  }

  onFilterALCHandler = event => {
    const beers = this.state.beers
    const filterBeers = beers.filter(beer => event.target.value ? 
      Math.trunc(beer.abv) === Number(event.target.value) :
      beers)
      this.setState(() => {
        return {filterBeers: filterBeers}
      })
    
    };

  componentDidMount() {
    const items = []
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    })
    .then(jsonResponse => jsonResponse.splice(0,20))
    .then(arr => {
      arr.forEach(element => {
        items.push({
          id: element.id,
          name: element.name,
          tagline: element.tagline,
          description: element.description,
          imageUrl: element.image_url, 
          abv: element.abv, //alcohol by volume
          ibu: element.ibu, //international bittering unit
          ebc: element.ebc, //color Units Ebc (European Brewery Convention) 
          food_pairing: element.food_pairing
        })
        
      })
      return items
    }).then(items => {
        this.setState(() => {
          return {beers: items }
        })
        
    })
    .catch(networkError => console.log(networkError.message));
  }

  render () {
    return (
      <Layout 
              isOpen={this.state.menu} 
              onToggle={this.onToggleHandler}
              onFilterALCHandler={this.onFilterALCHandler}>

        <Main 
          isOpen={this.state.menu}
          beers={this.state.beers}
          filterBeers={this.state.filterBeers}/>
        <Registration isOpen={this.state.menu} onToggle={this.onToggleHandler}/>  

      </Layout>
    );
  }
}

export default App;
