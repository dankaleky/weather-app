import React from 'react'


import Days from './Days'
import DetailedForcast from './DetailedForcast'

export default class WeatherApp extends React.Component {
  render() {
    return(

      <main>
        <Days />
        <DetailedForcast/>

      </main>



    )
  }
}
