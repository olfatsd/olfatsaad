import React from 'react'

export default function Forecast(props) {
    const d = new Date(props.data.dt_txt.slice(0,10))
    const week = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']
  return (
    <div style={{border:'2px solid cadetblue', width:'120px', textAlign:'center', backgroundColor:'lightgray'}}>
        <h3>{week[d.getDay()]}</h3>
        {props.data.main ? <h1>{props.data.main.temp.toFixed()}°C</h1> : null}
    </div>
  )
}
