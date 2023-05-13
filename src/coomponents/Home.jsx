import React from 'react'
import Forecast from './Forecast'


export default function Home(props) {

    const date = new Date();

    //הוספה או מחיקה מהמועדפים
    const addFavorite = () => {
        if (props.favorite.length > 0) {
            let ind = props.favorite.findIndex(element => element.city.name == props.data.city.name)
            if (ind == -1) {
                props.setFavorite([...props.favorite, props.data])
            }
            else {
                props.favorite.splice(ind, 1)
                props.setFavorite([...props.favorite])
            }
        }
        else props.setFavorite([...props.favorite, props.data])
    }

    return (
        <div style={{ paddingTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
                <input value={props.location} onChange={event => props.setLocation(event.target.value)}
                    placeholder='Enter Location'
                    type="text" />
                <button onClick={props.searchLocation}>Search</button>
                <h3 id='error'></h3>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    {/*הצגת שם האיזור*/}
                    <h2>{props.data.city.name}</h2>
                    {/*הצגת הטימפרטורה*/}
                    {props.data.list[0].main ? <h1>{props.data.list[0].main.temp.toFixed()}°C</h1> : null}
                </div>
                <div style={{ marginTop: '50px' }}>
                    <button style={{ backgroundColor: 'cadetblue', marginRight: '10px', fontSize: '20px' }} onClick={() => { addFavorite() }}>Favorite</button>
                </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder' }}>
                {props.data.list[0].weather ? <p>{props.data.list[0].weather[0].main}</p> : null}
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around' }}>
                {props.data.list.map((val, index) => {
                    if ((index == 0 || index % 8 == 0))
                        return <Forecast data={val} />
                })}
            </div>
        </div>
    )
}
