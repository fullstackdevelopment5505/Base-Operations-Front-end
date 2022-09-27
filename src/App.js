import './App.css';
import Map from "./components/Map";
import DrawCircle from './components/DrawCircle';
import UserMarker from './components/UserMarker'
import { useState } from 'react';
import getUsers from './services';

function App() {
  const [users, setUsers] = useState([])

  const onCircleCreated = e => {
    getUsers(e.layer._latlng.lat, e.layer._latlng.lng, e.layer._mRadius).then(response => {
      setUsers(response.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <Map zoom={18} center={{ lat: 28.626137, lng: 79.821603 }}>
        <DrawCircle onCircleCreated={onCircleCreated} />
        {
          users.map((user, index) => (
            <UserMarker key={index} position={{lat: user.lat, lng: user.lng}}>
              <div>{user.name}</div>
            </UserMarker>
          ))
        }
      </Map>
    </div>
  );
}

export default App;
