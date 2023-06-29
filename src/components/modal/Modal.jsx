//Styles
import "./modal.css";

//Icons
import attention from "../../assets/attention.png";
import close from "../../assets/close.png";

function Modal({ modalClassName, modalContentClassName, onClick }) {
  return (
    <div className={modalClassName}>
      <div className={modalContentClassName}>
        <div className="close">
          <img onClick={onClick} src={close} alt="close" />
        </div>
        <div className="header">
          <p>Attention</p>
          <img src={attention} alt="" />
        </div>
        <p>
          Fill in the fields, and select the currencies, before clicking on the
          button.
        </p>
      </div>
    </div>
  );
}

export default Modal;
