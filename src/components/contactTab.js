const ContactTab = ({ action, status, contactLists }) => {
  const alpha = Array.from(Array(26)).map((_, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  return (
    <div className="tabWrapper">
      <ul className="flex tabList">
        {alphabet.map((alp, i) => {
          const filteredContacts = contactLists.filter((data) =>
            data.name.first.startsWith(alp.toUpperCase()),
          );

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
