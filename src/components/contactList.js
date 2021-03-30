import React, { useState } from 'react';
import DetailsCard from './detailsCard';

const ContactList = ({ contactLists, contactGroup }) => {
  const [toggleCard, setToggleCard] = useState({});

  const filteredContacts = contactLists.filter((data) =>
    data.name.first.startsWith(contactGroup.toUpperCase()),
  );

  return (
    <div className="contact-list-container">
      {filteredContacts.map((contactInfo, index) => (
        <div className="contact-list-content" key={index}>
          <p
            className="contact-list-text"
            onClick={() =>
              setToggleCard({
                [index]: !toggleCard[index],
              })
            }
          >
            {`${contactInfo.name.first} `} <span>{contactInfo.name.last}</span>
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
      ))}
    </div>
  );
};

export default ContactList;
