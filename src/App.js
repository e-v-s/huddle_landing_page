import React, { useEffect, useState } from 'react';
import firebase from "./utils/firebase"

import Header from './components/header';
import Fields from './components/fields';

import logo from './images/logo.svg';

function App() {
  const [data, setData] = useState(null);
  let database = firebase.firestore().collection('sections').orderBy("key", "asc");

  let items = [];
  useEffect(() => {   
    database
      .get().then(snapshot => snapshot.forEach( doc => {
        items.push(doc.data());
      })).then(() => setData(items))
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
