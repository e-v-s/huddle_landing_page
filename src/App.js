import React, { useEffect, useState } from 'react';
import firebase from "./utils/firebase"

import Header from './components/header';
import Fields from './components/fields';

import logo from './images/logo.svg';

function App() {
  const [data, setData] = useState([{title: '', text: ''}]);
  let database = firebase.firestore().collection('sections').orderBy("key", "asc");

  useEffect(() => {   
    let items = [];
    

    database
      .get().then(snapshot => snapshot.forEach( doc => {
        items.push(doc.data());
      })).then(() => {return setData(items)})
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="App">
    <Header btn='Try It Free' src={logo} />
    <Fields data={data} />
    </div>
    );
  }
  
export default App;
