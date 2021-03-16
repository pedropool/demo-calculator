import React, { useState } from 'react';
import './App.css'

// import blocks
import Calculator from './blocks/Calculator';
import Results from './blocks/Results';
import { getResults } from './utils/api'

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
    setLoading(true)
    getResults(data, setResults)
    setLoading(false)
  }

  const clearResults = () => {
    setResults(INITIAL_DATA)
  }

  return (
    <div className="main">
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
