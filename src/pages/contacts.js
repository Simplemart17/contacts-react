import React from 'react';
import ContactTab from '../components/contactTab';
import ContactList from '../components/contactList';

const Contacts = () => (
  <div className="contact-wrapper">
    <h1 className="text-center">Contact List</h1>
    <div style={{ padding: '0 2rem' }}>
      <ContactTab />
      <ContactList />
    </div>
  </div>
);

export default Contacts;
