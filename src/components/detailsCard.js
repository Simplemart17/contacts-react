import testImg from '../favicon.ico';
import cancelBtn from '../assets/cancel.svg';

const DetailsCard = ({ closeDetailCard }) => (
  <div className="detail-card-container">
    <div className="flex card-wrapper">
      <div className="avatar-container">
        <img src={testImg} alt="" className="avatar" />
      </div>
      <div className="detail-text">
        <h1>Bubu, MANSONNN</h1>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">e-mail</p>
          <p className="detail-text-value">
            New Info hvv yvyt yviy iyviy yviyvktyv
          </p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">phone</p>
          <p className="detail-text-value">New Info</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">street</p>
          <p className="detail-text-value">New Info</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">city</p>
          <p className="detail-text-value">New Info</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">state</p>
          <p className="detail-text-value">New Info</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">postcode</p>
          <p className="detail-text-value">New Info</p>
        </div>
      </div>
    </div>
    <div className="detail-label">USERNAME TheNewUserName</div>
    <div className="close-btn" onClick={closeDetailCard}>
      <img src={cancelBtn} alt="" className="close-btn-img" />
    </div>
  </div>
);

export default DetailsCard;
