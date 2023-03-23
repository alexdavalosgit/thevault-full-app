import { Container, Nav, Navbar } from "react-bootstrap";
import AuthButton from "../AuthButton/AuthButton";

function NavbarComp({
  defaultAccount,
  isLoggedIn,
  connButtonText,
  connectWallet,
}) {
  return (
    <Navbar className="navbar" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/home" className="logo">
          The Vault
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="nav-link">
              <Nav.Link href="https://twitter.com/TheVaultEth" target="_blank">
                Twitter
              </Nav.Link>
              <Nav.Link
                href="https://goerli.etherscan.io/address/0xc2d0EC0391cd47E5f5CebFeF967EbD55dfCCFEe6"
                target="_blank"
              >
                {" "}
                Contract{" "}
              </Nav.Link>
            </div>
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
