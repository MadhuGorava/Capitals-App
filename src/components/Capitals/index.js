import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedId: countryAndCapitalsList[0].id}

  render() {
    const {selectedId} = this.state
    return (
      <div className="bg-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <ul className="ordered-container">
            <select id="country" className="capital-list">
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  value={eachCountry.id}
                  selected={selectedId}
                  key={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="country">is capital of which country?</label>
            <li className="country-list">
              {countryAndCapitalsList.map(eachCountry => (
                <p>{eachCountry.country}</p>
              ))}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Capitals
