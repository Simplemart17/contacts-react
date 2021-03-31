import { filterContacts } from './contactFilter';

test('should filter the list based on supplied string', () => {
  const lists = [
    { name: { first: 'Andrew' } },
    { name: { first: 'Bob' } },
    { name: { first: 'Sandra' } },
    { name: { first: 'Mark' } },
    { name: { first: 'Angela' } },
  ];

  const filter1 = filterContacts(lists, 'a');
  const filter2 = filterContacts(lists, 's');
  const filter3 = filterContacts(lists, 'z');

  expect(filter1).toHaveLength(2);
  expect(filter2).toHaveLength(1);
  expect(filter3).toHaveLength(0);
});
