import React from 'react'
import {useState, useEffect} from 'react';
import {} from './styles.css'

import List from './List';
import Form from './Form';

function Contacts() {
  
  const [contacts, setContacts] = useState([
    {
      fullname: "John Doe",
      phonenumber: "123456789"
    },
    {
      fullname: "Jane Doe",
      phonenumber: "987654321"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  },[contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact = {setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts