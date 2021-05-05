import "./style.css";
import approvedIcon from "./../../../icons/approved.png";
import pendingIcon from "./../../../icons/pending.png";
import redeemIcon from "./../../../icons/reedem.png";
import generateInvoice from "./../../../icons/invoice.png";
export default function ProcessPath({ approved, redeem }) {
  return (
    <>
      <div className="processPath-container center mycol">
        <div className="center myrow">
          <div className="center mycol">
            <img
              className="iconStyle"
              src={generateInvoice}
              alt="invoice icon"
            />
            <div className="purpleblueText processPathTextMargin">
              Generate invoice
            </div>
          </div>
          <div className="greenLine"></div>

          <div className="center mycol">
            <img
              className="iconStyle"
              src={approved ? approvedIcon : pendingIcon}
              alt="approve or pending icon"
            />
            <div className={approved ? `purpleblueText` : `grayText`}>
              {approved ? `approved` : `pending`}
            </div>
          </div>

          <div className="line"></div>
          <div className="center mycol">
            <img className="iconStyle" src={redeemIcon} alt="redeem icon" />
            <div className="grayText">reedem</div>
          </div>
        </div>
      </div>
    </>
  );
}
