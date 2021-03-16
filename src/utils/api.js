import axios from 'axios'

const apiUrl = 'http://localhost:3001/'

const headers = { 'Content-Type': 'application/json' }

// Create a request to ohm value calculator project
const getResults = async (data, setResults) => {
    try {
        const response = await axios.post(apiUrl, 
          {
            'band-a': data.firstDigit,
            'band-b': data.secondDigit,
            'band-c': data.multiplier,
            'band-d': data.tolerance
          }, 
          { headers }
        )
        setResults({
          resistance: response.data.ohm
        })
        return response;
      } catch (e) {
        console.log(e);
        alert('Error: ' + e.response.data.message);
      }
}

export { getResults }