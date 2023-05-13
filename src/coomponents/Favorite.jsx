import React from 'react'
import Location from './Location'

export default function Favorite(props) {
    return (
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around' }}>
            {props.favorite.map((val, index) => {
                if (props.favorite.length > 0)
                    return <Location data={val} />
            })}
        </div>
    )
}
