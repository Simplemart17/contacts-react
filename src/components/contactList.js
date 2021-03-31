import React, { useState } from 'react';
import DetailsCard from './detailsCard';
import { filterContacts } from '../utils/contactFilter';

/**
 * @description - contact list component displaying lists of contacts per group
 * @param {Array} contactLists
 * @param {String} contactGroup
 * @returns {JSX}
 */
const ContactList = ({ contactLists, contactGroup }) => {
  const [toggleCard, setToggleCard] = useState({});

  // Filter conatcts to be grouped
  const filteredContacts = filterContacts(contactLists, contactGroup);

  return (
    <div className="contact-list-container">
      {filteredContacts.length ? (
        filteredContacts.map((contactInfo, index) => (
          <div
            className="contact-list-content"
            key={index}
            data-testid="users-list"
          >
            <p
              className="contact-list-text"
              onClick={() =>
                setToggleCard({
                  [index]: !toggleCard[index],
                })
              }
            >
              {`${contactInfo.name.first} `}{' '}
              <span>{contactInfo.name.last}</span>
            </p>
            {toggleCard[index] ? (
              <DetailsCard
                closeDetailCard={() =>
                  setToggleCard({
                    [index]: !toggleCard[index],
                  })
                }
                detailsInfo={contactInfo}
              />
            ) : null}
            <hr />
          </div>
        ))
      ) : (
        <p>No contact available!</p>
      )}
    </div>
  );
};

export default ContactList;
