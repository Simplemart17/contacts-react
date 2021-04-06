import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactTab from '../components/ContactTab/contactTab';
import ContactList from '../components/ContactList/contactList';
import './contacts.css';

const Contacts = () => {
  const [activeTab, setActiveTab] = useState('a');
  const [contactArray, setContactArray] = useState([]);
  const [toggleCard, setToggleCard] = useState({});

  useEffect(() => {
    // get the contacts data by making an API call
    const fetchContacts = async () => {
      const {
        data: { results },
      } = await axios.get('https://www.randomuser.me/api/?results=120');

      setContactArray(results);
    };
    fetchContacts();
  }, []);

  // function to toggle contact card
  const handleCardToggle = (index) => () => {
    setToggleCard({
      [index]: !toggleCard[index],
    });
  };

  return (
    <div className="contact-wrapper">
      <h1 className="text-center">Contact List</h1>
      <div className="contact-padding">
        <ContactTab
          status={activeTab}
          action={setActiveTab}
          contactLists={contactArray}
          setToggleCard={setToggleCard}
        />
        <ContactList
          contactLists={contactArray}
          contactGroup={activeTab}
          toggleCard={toggleCard}
          toggleContactCard={handleCardToggle}
        />
      </div>
    </div>
  );
};

export default Contacts;
