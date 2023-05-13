import React from 'react'

export default function Location(props) {
  return (
    <div style={{border:'2px solid cadetblue', width:'120px', textAlign:'center', backgroundColor:'lightgray'}}>
        {console.log(props.data)}
        <h3>{props.data.city.name}</h3>
        {props.data.list[0].main ? <h1>{props.data.list[0].main.temp.toFixed()}°C</h1> : null}
    </div>
  )
}
