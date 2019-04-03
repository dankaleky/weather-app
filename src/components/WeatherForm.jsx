import React, { Component } from 'react'

import '../css/weather-form.css';

export default class WeatherForm extends Component {
  render(){
    return(
       <form className="weather-form">
         <header className="form-title">
           Find your local weather!
         </header>
         <div>
           <label htmlFor="city">Enter city, State:</label>
           <input type="text" name="city" placeholder="ex. Miami, FL"/>
        </div>
        <footer>
          <input type="submit" />
        </footer>
      </form>
    )
  }
}
