import React from 'react';
import Layout from './hoc/Layout';
import Registration from './containers/Registration';


class App extends React.Component {

  state = {
      menu: false,
    }

  onToggleHandler = () => {
      this.setState({
          menu: !this.state.menu
      })
  }

  render () {
    return (
      <Layout isOpen={this.state.menu} onToggle={this.onToggleHandler}>
        <Registration isOpen={this.state.menu} onToggle={this.onToggleHandler}/>  
      </Layout>
    );
  }
}

export default App;
