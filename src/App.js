import React from 'react';
import {Route , Switch} from "react-router-dom"
// components
import Landing from './components/Landing';
import Coindata from './components/Coindata';
import Navbar from './components/Navbar';
// context
import UnitReduxProvider from './context/UnitReduxProvider';

const App = () => {
    return (
        <div>
            <UnitReduxProvider>
                <Navbar />
              <Switch>
                  <Route path="/coin/:id" component={Coindata} />
                  <Route path="/" component={Landing} />
              </Switch>
            </UnitReduxProvider>
        </div>
    );
};

export default App;