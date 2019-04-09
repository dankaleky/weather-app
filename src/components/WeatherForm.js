import React from 'react';
import '../css/weather-form.css';

class WeatherForm extends React.Component {

    hanldeSubmit = (event) => {
      event.preventDefault()
      console.log(event);
      let city = this.weatherFormInput.value.replace(/\s/g,'-')
      this.props.history.push(`/weather/${ city }`)

    }

  render() {
    return (
      <form action="" className="weather-form" onSubmit={  this.hanldeSubmit } >
        <h1 className="form-title">Find your local weather!</h1>
        <div>
          <label htmlFor="city">Enter city, state:</label>
          <input type="text" id="city" name="city" placeholder="ex: Miami, FL"
            ref={ elem => this.weatherFormInput = elem }/>
        </div>
        <footer>
          <input type="submit" value="Find my weather!" />
        </footer>
      </form>
    )
  }
}

export default WeatherForm;
