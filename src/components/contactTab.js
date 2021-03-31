import { filterContacts } from '../utils/contactFilter';

/**
 *
 * @param {Function} action
 * @param {String} status
 * @param {Array} contactList
 * @returns {JSX}
 */
const ContactTab = ({ action, status, contactLists }) => {
  // Generate array of all alphabets using array method and string char code
  const alpha = Array.from(Array(26)).map((_, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  return (
    <div className="tabWrapper">
      <ul className="flex tabList">
        {alphabet.map((alp, i) => {
          const filteredContacts = filterContacts(contactLists, alp);

          return (
            <li className="item-list" key={i}>
              <div
                className={`${
                  status === alp
                    ? 'active-tab'
                    : !filteredContacts.length
                    ? 'empty-tab-count'
                    : ''
                } tab`}
                onClick={() => action(alp)}
              >
                {alp}
                <span className="tab-count">{filteredContacts.length}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactTab;
