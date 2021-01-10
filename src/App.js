import React, { useEffect, useState } from 'react';
import firebase from "./utils/firebase"

import Header from './components/header';
import Fields from './components/fields';

import logo from './images/logo.svg';

function App() {
  const [data, setData] = useState([]);
  let database = firebase.firestore().collection('sections');
  
  useEffect(() => {   
    database
      .get()
      .then(snapshot => {
        if(!snapshot) {
          setData(l => [])
        } else {
          let items = []
          snapshot.forEach(i => {
            items.push({ ...i.data() })
          })
          setData(l => items)
        }
      }).catch(error => console.log(error))     
    }, []);

  return (
    <div className="App">
    <Header btn='Try It Free' src={logo} />
    <Fields data={data} />
    </div>
    );
  }

export default App;
