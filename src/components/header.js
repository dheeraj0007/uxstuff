import React from "react";
import Nav from "./nav";
import Middle from "./middle";
import PaymentButtons from "./paymentDetails";
import { useState } from "react";
import Modal from "./modal";
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  return (
    <React.Fragment>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<button onClick={closeModalHandler}><CloseIcon /></button>}
      >
      </Modal>
      <div className="border-black border-x-2 pt-5  mx-2 sm:mx-4 lg:mx-4  lg:ml-6 xl:mx-0 xl:ml-8  border-opacity-5 cursor-pointer">
        <div onClick={openModalHandler}>
          <Nav />
          <Middle />
        </div>
        <PaymentButtons />
      </div>;
    </React.Fragment>)
};

export default Header;
