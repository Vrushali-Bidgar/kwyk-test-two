import React from 'react';
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./header";
import './App.css';

function App() {

  const contacts = [
    {
      id:"1",
      name:"Anoushka Kadam",
      email:"anu@gmail.com",
    },
    {
      id:"2",
      name:"Vrushali",
      email:"vsbidgar@gmail.com",
    }
  ];



  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={ contacts } />
    </div>
  );
}

export default App;
