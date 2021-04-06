import { filterContacts } from '../../utils/contactFilter';
import { configJson } from '../../configJson';
import './contactTab.css';

/**
 *
 * @param {Function} action
 * @param {String} status
 * @param {Array} contactList
 * @returns {JSX}
 */
const ContactTab = ({ action, status, contactLists, setToggleCard }) => {
  const { tabs } = configJson;

  // sets the active tab
  // close the detail card if any is opened
  const setActiveTab = (alp) => () => {
    action(alp);
    setToggleCard({});
  };

  return (
    <div className="tabWrapper">
      <ul className="flex tabList">
        {tabs.map((alp, i) => {
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
                onClick={setActiveTab(alp)}
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
