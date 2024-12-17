// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DiplomaNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    constructor(address initialOwner) ERC721("DiplomaNFT", "DIP") Ownable(initialOwner) {}

    // Yeni diploma (NFT) mint etme fonksiyonu
    function mintDiploma(address recipient) public onlyOwner {
        _tokenIdCounter++;
        _safeMint(recipient, _tokenIdCounter);
    }
}
