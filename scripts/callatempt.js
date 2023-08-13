const hre = require("hardhat");

const CONTRACT_ADDR = "0xD3161FDc1aD8AeE97A5A20876beeb272F89f6C69"; //Contract.sol Address

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

  const intract_addr = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";  

  console.log(await contract.intract(intract_addr));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

