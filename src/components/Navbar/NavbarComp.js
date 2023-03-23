import { Container, Nav, Navbar } from "react-bootstrap";
import AuthButton from "../AuthButton/AuthButton";

function NavbarComp({
  defaultAccount,
  isLoggedIn,
  connButtonText,
  connectWallet,
}) {
  return (
    <Navbar bg="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/home" className="logo">
          The Vault
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="https://twitter.com/TheVaultEth"
              target="_blank"
              className="nav-link"
            >
              Twitter
            </Nav.Link>
            <Nav.Link
              href="https://goerli.etherscan.io/address/0xc2d0EC0391cd47E5f5CebFeF967EbD55dfCCFEe6"
              target="_blank"
              className="nav-link"
            >
              Contract
            </Nav.Link>
            <AuthButton
              defaultAccount={defaultAccount}
              isLoggedIn={isLoggedIn}
              connButtonText={connButtonText}
              connectWallet={connectWallet}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
