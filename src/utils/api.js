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
            'band-c': data.multiplier
          }, 
          { headers }
        )
        setResults({
          resistance: response.data.ohm
        })
        return response;
      } catch (e) {
        console.log(e);
        if(e.response)
          alert('Error: ' + e.response.data.message)
        else
          alert('Server connection error')
      }
}

export { getResults }