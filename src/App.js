import React from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        <p>Almost before we knew it, we had left the ground.</p>
      </Layout>

    </div>
  );
}

export default App;
