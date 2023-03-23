import { Container, Button } from "react-bootstrap";
import "../Header/Header.css";
import PurchasePopup from "../Purchase/Purchase";

function HeaderInfo({
  nftTokenId,
  setNftTokenId,
  nftContractAddress,
  setNftContractAddress,
  handleDeposit,
  depositLoading,
  handleWithdraw,
}) {
  return (
    <div className="header-info">
      <div className="header-text">
        <h2 className="title">Collect randomly</h2>
        <p className="text">Buy a random erc-721 token from the vault.</p>
      </div>
      <div className="button-container">
        <PurchasePopup
          nftContractAddress={nftContractAddress}
          setNftContractAddress={setNftContractAddress}
          handleDeposit={handleDeposit}
          nftTokenId={nftTokenId}
          setNftTokenId={setNftTokenId}
          isLoading={depositLoading}
        />
        <Button onClick={handleWithdraw} variant="primary">
          Purchase
        </Button>
      </div>
    </div>
  );
}

export default HeaderInfo;
