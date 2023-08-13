// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IContract {
    function attempt() external;
}

contract Contract {
    address contractAddress;

    function intract(address _contractAddress) external {
        contractAddress = _contractAddress;

        IContract(contractAddress).attempt();


    }
}
