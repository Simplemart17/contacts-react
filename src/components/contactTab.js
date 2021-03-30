const ContactTab = ({ action, status }) => {
  const alpha = Array.from(Array(26)).map((_, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  return (
    <div className="tabWrapper">
      <ul className="flex tabList">
        {alphabet.map((alp, i) => (
          <li className="item-list" key={i}>
            <div className="tab">
              {alp}
              <span className="">10</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactTab;
