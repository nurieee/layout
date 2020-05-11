import React from 'react';
import reducers from "./redux/index";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container pt-5">
        {props.children}
      </div>
    </>
  )
}


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          {/* <FunctionalComponent count={1} step={1} />
          <FunctionalComponent count={2} step={3} /> */}
          <Switch>
            <Route path="/" exact>
              <Layout>
                <Home/>
              </Layout>
            </Route>
            <Route path="/gallery">
              <Layout>
                <Gallery/>
              </Layout>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
