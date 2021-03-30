import React, { useState } from 'react';
import ContactTab from '../components/contactTab';
import ContactList from '../components/contactList';
import contactArray from '../components/contactsArray';

const Contacts = () => {
  const [activeTab, setActiveTab] = useState('a');

  return (
    <div className="contact-wrapper">
      <h1 className="text-center">Contact List</h1>
      <div style={{ padding: '0 2rem' }}>
        <ContactTab
          status={activeTab}
          action={setActiveTab}
          contactLists={contactArray}
        />
        <ContactList contactLists={contactArray} contactGroup={activeTab} />
      </div>
    </div>
  );
};

export default Contacts;
