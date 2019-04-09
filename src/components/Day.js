import React from 'react';

class Day extends React.Component {

  formatDate = (datetime) => {
     return new Date (datetime).toLocaleDateString('en-US',
       {
         month: 'short',
         day: 'numeric'
       });
   }

   getDayOfWeek = (datetime) => {
      // let thisdate = new Date(datetime);
      return new Date(datetime).toLocaleDateString('en-US',
        {
          weekday: 'short'
        });
    }
      updateCurrentDay = event => {
        this.props.updateCurrentDay(this.props.day)
      }

  render() {
    let { day } = this.props
    let classes = "day "
    classes += this.props.day === this.props.currentDay ? "selected" : ""

    return (
      <div className={ classes }
          onClick={ this.updateCurrentDay }
        >
        <h2>{ this.getDayOfWeek(day.dt)}</h2>
        <h3>{ this.formatDate(day.dt) }</h3>
        <img src={`${process.env.PUBLIC_URL}/weather_icons/${ day.icon}.png`} alt="weather" />
        <div className="degrees">
          <span className="high">{ day.temp_max };</span>/{ day.temp_min};
        </div>
        <p>A p.m. shower or thunderstorm.</p>
      </div>
    )
  }
}

export default Day;
