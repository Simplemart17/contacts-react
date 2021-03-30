import cancelBtn from '../assets/cancel.svg';

const DetailsCard = ({ detailsInfo, closeDetailCard }) => (
  <div className="detail-card-container">
    <div className="card-wrapper">
      <div className="avatar-container">
        <img src={detailsInfo.picture.medium} alt="" className="avatar" />
      </div>
      <div className="detail-text">
        <h1 className="detail-text-name">
          {`${detailsInfo.name.last}, `} <span>{detailsInfo.name.first}</span>
        </h1>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">e-mail</p>
          <p className="detail-text-value">{detailsInfo.email}</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">phone</p>
          <p className="detail-text-value">{detailsInfo.phone}</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">street</p>
          <p className="detail-text-value">{`${detailsInfo.location.street.number} ${detailsInfo.location.street.name}`}</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">city</p>
          <p className="detail-text-value">{detailsInfo.location.city}</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">state</p>
          <p className="detail-text-value">{detailsInfo.location.state}</p>
        </div>
        <div className="flex flex-space-between ">
          <p className="detail-text-key">postcode</p>
          <p className="detail-text-value">{detailsInfo.location.postcode}</p>
        </div>
      </div>
    </div>
    <div className="detail-label">{`USERNAME ${detailsInfo.login.username}`}</div>
    <div className="close-btn" onClick={closeDetailCard}>
      <img src={cancelBtn} alt="" className="close-btn-img" />
    </div>
  </div>
);

export default DetailsCard;
