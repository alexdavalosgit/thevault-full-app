pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FakeNFT is ERC721URIStorage {
    constructor() ERC721("coolcats", "cat") {
        _baseURI();
        _safeMint(msg.sender, 0);
        _setTokenURI(0, "https://api.coolcatsnft.com/cat/0");
        _safeMint(msg.sender, 1);
        _setTokenURI(1, "https://api.coolcatsnft.com/cat/1");
        _safeMint(msg.sender, 2);
        _setTokenURI(2, "https://api.coolcatsnft.com/cat/2");
        _safeMint(msg.sender, 3);
        _setTokenURI(3, "https://api.coolcatsnft.com/cat/3");
        _safeMint(msg.sender, 4);
        _setTokenURI(4, "https://api.coolcatsnft.com/cat/4");
    }
}
