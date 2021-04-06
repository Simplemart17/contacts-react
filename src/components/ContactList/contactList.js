import React from 'react';
import DetailsCard from '../DetailsCard/detailsCard';
import { filterContacts } from '../../utils/contactFilter';
import './contactList.css';

/**
 * @description - contact list component displaying lists of contacts per group
 * @param {Array} contactLists
 * @param {String} contactGroup
 * @returns {JSX}
 */
const ContactList = ({
  contactLists,
  contactGroup,
  toggleContactCard,
  toggleCard,
}) => {
  // Filter contacts to be grouped
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
            <p className="contact-list-text" onClick={toggleContactCard(index)}>
              {`${contactInfo.name.first} `}{' '}
              <span>{contactInfo.name.last}</span>
            </p>
            {toggleCard[index] ? (
              <DetailsCard
                closeDetailCard={toggleContactCard(index)}
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
