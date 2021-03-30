import React, { useState } from 'react';
import DetailsCard from './detailsCard';

const ContactList = ({ contactLists }) => {
  const [toggleCard, setToggleCard] = useState(true);

  return (
    <div className="contact-list-container">
      <div className="contact-list-content">
        <p
          className="contact-list-text"
          onClick={() => setToggleCard(!toggleCard)}
        >
          Buhari, <span>Mohamad</span>
        </p>
        {toggleCard && (
          <DetailsCard closeDetailCard={() => setToggleCard(false)} />
        )}
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
      <div className="contact-list-content">
        <p className="contact-list-text">
          Buhari, <span>Mohamad</span>
        </p>
        <hr />
      </div>
    </div>
  );
};

export default ContactList;
