import React from 'react';
import Layout from './hoc/Layout';
import Registration from './containers/Registration';


class App extends React.Component {
  render () {
    return (
      <Layout>
        <Registration />  
      </Layout>
    );
  }
}

export default App;
