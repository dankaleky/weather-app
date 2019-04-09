import React from 'react';
import DayForecast from './DayForecast';
import NightForecast from './NightForecast';

// class DetailedForecast extends React.Component {
//   render() {
//     return (
//       <div className="details">
//         <DayForecast />
//         <NightForecast />
//       </div>
//     )
//   }
// }


const DetailedForecast = props => {
    return(

     <div className="details">
       <DayForecast currentDay={ props.currentDay } />
       <NightForecast currentDay={ props.currentDay } />
      </div>
   )
}




export default DetailedForecast;
