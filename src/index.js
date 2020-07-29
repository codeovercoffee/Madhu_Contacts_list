import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import contacts from "./contacts";
import Avatar from "./Avatar";
function createCard(contacts)
{
  return(<App
  key={contacts.name}
      name={contacts.name}
      phone={contacts.phone}
      email={contacts.email}
      isrc={contacts.src}
    />);
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1 className="heading"> My Contacts</h1>
    <Avatar isrc="https://lumiere-a.akamaihd.net/v1/images/b_disneyprincess_updates_mobile_rapunzel_19273_5e2281e9.jpeg?region=0,0,640,709https://lumiere-a.akamaihd.net/v1/images/b_disneyprincess_updates_mobile_rapunzel_19273_5e2281e9.jpeg?region=0,0,640,709"/>
    {contacts.map(createCard)}
  </div>,
  rootElement
);
