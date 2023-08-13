# Emit the Winner event

### Sample Hardhat Project
Your goal is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

If you take a look at the Code tab in Etherscan, you'll see that the source code for this contract looks like this:

------------------------------------------------------

contract Contract {
    event Winner(address);
    
    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}

------------------------------------------------------
How do we possibly make it so the tx.origin (the EOA who originated the transaction) is not equal to the msg.sender? 

This project demonstrates a basic Hardhat use case. It comes with a contract.sol and two script that deploys that contract and other one intracts with the contract.

### Try running some of the following tasks:
```Terminal
npx hardhat compile
npx hardhat run scripts/deploy.js --network goerli
npx hardhat run scripts/callatempt.js --network goerli
```

### Transaction Details
Transaction Hash: 0xacd78bab31dd3018e9b036e9e53ce8fa7a3305e05445f2a2e9cb85d5e6f92474
Etherscan Link: https://goerli.etherscan.io/tx/0xacd78bab31dd3018e9b036e9e53ce8fa7a3305e05445f2a2e9cb85d5e6f92474

