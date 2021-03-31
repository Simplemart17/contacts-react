import { render } from '@testing-library/react';
import axios from 'axios';
import Contacts from './contacts';
import mockData from '../mockData';

test('renders the app with fetched contacts', async () => {
  render(<Contacts />);
  const url = 'https://www.randomuser.me/api/?results=500';

  axios.get.mockResolvedValueOnce({ data: { results: mockData } });

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(url);
});
