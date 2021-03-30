import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <Link to="/contacts" className="see-contact-btn">
    See Contacts
  </Link>
);

export default HomePage;
