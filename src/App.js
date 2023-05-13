import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'
import Home from './coomponents/Home';
import Favorite from './coomponents/Favorite';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('Tel Aviv')
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    searchLocation()
  }, []);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=c6bb3d89abc41d9c8eee4e2c866072a3`

  //בקשה לקבלת המידע על מזג האוויר לפי האיזור המבוקש
  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
      .catch(err => { console.log(err.message)});
    setLocation('')
  }

  return (
    <div className="app">
      <HashRouter>
        <div style={{ textAlign: 'right'}}>
          <Link to={'/'}><button style={{backgroundColor:'cadetblue', marginRight:'10px', fontSize:'20px'}}>HOME</button></Link>
          <Link to={'/favorite'}><button style={{backgroundColor:'cadetblue', marginRight:'10px', fontSize:'20px'}}>FAVORITES</button></Link>
        </div>
        <hr />
        <Routes>
          <Route path='/' element={<Home data={data} location={location} setLocation={setLocation} searchLocation={searchLocation} favorite={favorite} setFavorite={setFavorite} />} />
          <Route path='/favorite' element={<Favorite favorite={favorite} />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;