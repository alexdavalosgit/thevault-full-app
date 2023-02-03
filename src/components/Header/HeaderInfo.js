import { Container } from "react-bootstrap";
import "../Header/Header.css";

function HeaderInfo() {
  return (
    <Container>
      <h2 className="title">Collect randomly</h2>
      <p className="text">Buy a random erc-721 token from the vault.</p>
    </Container>
  );
}

export default HeaderInfo;
