import React from 'react';
import Day from './Day';

class Days extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather For { this.props.cityState }</h1>
        <h1>{ this.props.today.dt }</h1>
        <div className="days">
          {
            this.props.data.city.map( (elem, index) => {
              return <Day key={ elem.dt }
                          day={ elem }                  index= { index }
                          updateCurrentDay={ this.props.updateCurrentDay }
                          currentDay={ this.props.currentDay }/>
            } )


          }

        </div>
      </div>
    )
  }
}
export default Days;
