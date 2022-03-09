// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

contract ContractA {
    mapping(uint256 => string) public patterns;

    function addPattern(uint256 _key, string memory _val) public {
        patterns[_key] = _val;
    }

      function modifyPattern(uint256 _key, string memory _val) public {
        require(bytes(patterns[_key]).length > 0, "Key does not exist");
        patterns[_key] = _val;
    }

  
    function retrievePattern(uint256 _key) public view returns (string memory){
        return patterns[_key];
    }
}