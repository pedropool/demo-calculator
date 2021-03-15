import React, { useState } from 'react';
import bulma from 'bulma';
import './App.css'

// import blocks
import Calculator from './blocks/Calculator';
import Results from './blocks/Results';

const INITIAL_DATA = {
  resistance: "",
  tolerance: "",
  min: "",
  max: ""
}

function App() {

  const [results, setResults] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(false);

  const calculateResults = (data) => {
    console.log("data en App =>", data);
    setLoading(true)
    // simulate call to API
    setTimeout(() => {
      setResults({
        resistance: "0.011 ohms",
        tolerance: "10%",
        min: "0.009899999999999999 ohms",
        max: "0.0121 ohms"
      })
      setLoading(false)
    }, 2000)
  }

  const clearResults = () => {
    setResults(INITIAL_DATA)
  }

  return (
    <div className="main">
      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav> */}
      <section className="section">
        <div className="container is-fluid">
          <h1 className="title">Resistor Ohm Value Calculator</h1>

          <div className="columns">
            <div className="column is-two-thirds">
              <div className="card">
                <div className="card-content">
                  <Calculator calculateResults={calculateResults} clearResults={clearResults} loading={loading} />
                </div>
              </div>
              
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <Results results={results} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}

export default App;
