import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactTab from '../components/contactTab';
import ContactList from '../components/contactList';

const Contacts = () => {
  const [activeTab, setActiveTab] = useState('a');
  const [contactArray, setContactArray] = useState([]);

  useEffect(() => {
    // get the contacts data by making an API call
    const fetchContacts = async () => {
      const {
        data: { results },
      } = await axios.get('https://www.randomuser.me/api/?results=500');

      setContactArray(results);
    };
    fetchContacts();
  }, []);

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
