import './App.css';
import React, {useEffect, useState} from 'react';
import Form from './Form'
import CardContainer from './CardContainer'

function App() {

  const [nameBirthday, setNameBirthday ] = useState ([])

  useEffect(() => {
    fetch('http://localhost:3000/formTest')
    .then(resp => resp.json())
    .then(data => setNameBirthday(data))

  },[])

  const onAddNameBirthday = (newNameBirthday) => {
    setNameBirthday((nameBirthday) => [...nameBirthday, newNameBirthday] )
  }

  return (
    <div>
      <Form onAddNameBirthday={onAddNameBirthday}/>
      <CardContainer nameBirthday={nameBirthday} />
    </div>
  );
}

export default App;
