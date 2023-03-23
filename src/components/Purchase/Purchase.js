import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function PurchasePopup({
  nftTokenId,
  setNftTokenId,
  nftContractAddress,
  setNftContractAddress,
  handleDeposit,
  isLoading,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {" "}
        Deposit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Deposit an NFT:{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              <div className="input-container">
                <label className="fw-bold">Token ID:</label>
                <input
                  type="text"
                  required
                  value={nftTokenId}
                  onChange={(e) => setNftTokenId(e.target.value)}
                />
                <br />
                <label className="fw-bold">Contract Address:</label>
                <input
                  type="text"
                  required
                  value={nftContractAddress}
                  onChange={(e) => setNftContractAddress(e.target.value)}
                />
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="flex-start">
          <Button className="btn-primary" onClick={handleDeposit}>
            Deposit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PurchasePopup;
