import React from 'react';
import './App.css';
import DFirm from './pages/DFirm'; //home page
import AboutUs from './pages/AboutUs';
import ServicesList from './pages/ServicesList';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar.js';
import ContentArea from './ContentArea.js';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <ContentArea />

          <Switch>
            <Route path="/" component={DFirm} exact/>
            <Route path="/about-us" component={AboutUs} />
            <Route path="/services-list" component={ServicesList} />
            <Route path="/service/:name" component={Service} />
            <Route path="/contact-us" component={ContactUs} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
