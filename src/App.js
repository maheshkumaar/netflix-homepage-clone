import React, { Component } from 'react';
import './cover-image.jpg';
import './App.css';
import Navigation from './Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="topBar">
            <div className="brand">
              <div  className="brand-text"><a>NETFLIX</a></div>
            </div>
            <div className="signInBtn">
              <button type="button" className="signIn">Sign In</button>
            </div>
          </div>
          <div className="midSection">
            <p><span id="headerOne">See what's next.</span><br/><br/><span id="headerTwo">WATCH ANYWHERE. CANCEL ANYTIME.</span><br/><br/>
            <button type="button" className="signUp">JOIN FREE FOR A MONTH</button></p>
          </div>
        </div>
        <Navigation />
        <div className="FooterBlock">
            <ul className="first_list">
              <li><a>Questions? Contact us.</a></li>
              <li>
                <ul className="inner_list_one">
                  <li><a>FAQ</a></li>
                  <li><a>Help Center</a></li>
                  <li><a>Account</a></li>
                  <li><a>Media Center</a></li>
                </ul>
              </li>
              <li>
                <ul className="inner_list_one">
                  <li><a>Investor Relations</a></li>
                  <li><a>Jobs</a></li>
                  <li><a>Ways to Watch</a></li>
                  <li><a>Terms of Use</a></li>
                </ul>
              </li>
              <li>
                <ul className="inner_list_one">
                  <li><a>Privacy</a></li>
                  <li><a>Cookie Preferences</a></li>
                  <li><a>Corporate Information</a></li>
                  <li><a>Contact Us</a></li>
                </ul>
              </li>
              <li>
                <ul className="inner_list_one">
                  <li><a>Speedtest</a></li>
                  <li><a>Netflix Originals</a></li>
                </ul>
              </li>
              <li>Netflix India.</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
